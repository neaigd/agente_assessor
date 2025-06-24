import express from 'express';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import cors from 'cors'; // Import cors middleware

const app = express();
const port = 3001; // Choose a port for the backend server

// Configure CORS to allow requests from frontend
app.use(cors({
  origin: ['http://localhost:5010', 'http://localhost:88'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Ensure the notes directory exists
const notesDir = '/app/notes';
if (!fs.existsSync(notesDir)) {
  fs.mkdirSync(notesDir, { recursive: true });
}

// Endpoint to save task notes
app.post('/save-note', (req, res) => {
  const { taskName, content } = req.body;

  if (!taskName || !content) {
    return res.status(400).json({ error: 'Task name and content are required.' });
  }

  // Sanitize task name for filename
  const filename = `${taskName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}.md`;
  const filePath = path.join(notesDir, filename);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).json({ error: 'Failed to save file.' });
    }
    console.log(`File saved: ${filePath}`);
    res.status(200).json({ message: 'File saved successfully.' });
  });
});

// Endpoint to generate ODT document
app.get('/generate-odt', async (req, res) => {
  const orderedFiles = [
    'Tarefa 2 - Relatório do Processo',
    'Tarefa 4 - Elaboração da Sentença',
    'Tarefa 1 - Resumo do Processo',
    'Tarefa 3 - Análise do Processo',
  ];

  let combinedMarkdown = '';
  const missingFiles = [];

  for (const taskName of orderedFiles) {
    // Sanitize task name for filename to match save-note endpoint
    const filename = `${taskName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')}.md`;
    const filePath = path.join(notesDir, filename);
    try {
      const content = await fs.promises.readFile(filePath, 'utf8');
      combinedMarkdown += `## ${taskName}\n\n` + content + '\n\n---\n\n'; // Add task title and separator
    } catch (err) { // Use any for error type for simpler handling
      if (err.code === 'ENOENT') {
        missingFiles.push(taskName);
      } else {
        console.error(`Error reading file ${filePath}:`, err);
        return res.status(500).json({ error: `Failed to read file ${taskName}.` });
      }
    }
  }

  if (missingFiles.length > 0) {
      return res.status(404).json({ error: `Missing task files: ${missingFiles.join(', ')}. Please ensure all tasks are completed.` });
  }

  // Create temporary files in /tmp which is typically writable in Docker
  const tempMarkdownFile = path.join('/tmp', `combined_document_${Date.now()}.md`);
  const outputOdtFile = path.join('/tmp', `processo_analise_${Date.now()}.odt`);

  try {
    await fs.promises.writeFile(tempMarkdownFile, combinedMarkdown, 'utf8');

    const pandocCommand = `pandoc ${tempMarkdownFile} -o ${outputOdtFile}`;

    exec(pandocCommand, async (error, stdout, stderr) => {
      if (error) {
        console.error(`Pandoc execution error: ${error}`);
        console.error(`Pandoc stderr: ${stderr}`);
        // Clean up temp files on error before sending response
        try { await fs.promises.unlink(tempMarkdownFile); } catch (e) { console.error('Error cleaning up md file on pandoc error:', e); }
        try { await fs.promises.unlink(outputOdtFile); } catch (e) { console.error('Error cleaning up odt file on pandoc error:', e); } // ODT file might not exist
        return res.status(500).json({ error: 'Failed to generate ODT document.', details: stderr });
      }
      console.log(`Pandoc stdout: ${stdout}`);

      // Send the generated ODT file
      res.download(outputOdtFile, 'processo_analise.odt', async (downloadErr) => {
        if (downloadErr) {
          console.error('Error sending file:', downloadErr);
          // Attempt to clean up even if sending failed
          try { await fs.promises.unlink(outputOdtFile); } catch (e) { console.error('Error cleaning up odt file after send error:', e); }
          try { await fs.promises.unlink(tempMarkdownFile); } catch (e) { console.error('Error cleaning up md file after send error:', e); }
          // Check if headers were already sent
          if (!res.headersSent) {
             return res.status(500).json({ error: 'Failed to send ODT document.' });
          }
        }
         // Clean up temporary files after successful download
        try { await fs.promises.unlink(outputOdtFile); } catch (e) { console.error('Error cleaning up odt file after send:', e); }
        try { await fs.promises.unlink(tempMarkdownFile); } catch (e) { console.error('Error cleaning up md file after send:', e); }

      });
    });

  } catch (err) {
    console.error('Error creating temporary file:', err);
    return res.status(500).json({ error: 'Failed to create temporary file for ODT generation.' });
  }
});

// Add a simple GET endpoint for testing
app.get('/', (req, res) => {
  res.send('Notes server is running.');
});

app.listen(port, () => {
  console.log(`Notes server listening on port ${port}`);
});

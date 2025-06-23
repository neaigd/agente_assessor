
import { GoogleGenAI, GenerateContentResponse, Part, Tool, GoogleSearchTool } from "@google/genai";
import { TASK_01_PROMPT_TEMPLATE, TASK_02_PROMPT_TEMPLATE, TASK_03_PROMPT_TEMPLATE, TASK_04_PROMPT_TEMPLATE } from '../constants';
import { GroundingChunk, Task3Data } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const modelName = 'gemini-2.5-flash-preview-04-17';

const extractRelevantPartsFromTask1 = (task1Result: string): string => {
  const questaoDireitoHeader = "### (5) Questões de Direito:";
  const questaoProcessualHeader = "### (6) Questões Processuais pendentes:";
  
  let relevantText = "";

  const qdIndex = task1Result.indexOf(questaoDireitoHeader);
  if (qdIndex !== -1) {
    const endIndexQD = task1Result.indexOf("###", qdIndex + questaoDireitoHeader.length);
    relevantText += task1Result.substring(qdIndex, endIndexQD !== -1 ? endIndexQD : task1Result.length).trim() + "\n\n";
  }

  const qpIndex = task1Result.indexOf(questaoProcessualHeader);
  if (qpIndex !== -1) {
     const endIndexQP = task1Result.indexOf("---", qpIndex + questaoProcessualHeader.length); // Assuming --- ends the section
    relevantText += task1Result.substring(qpIndex, endIndexQP !== -1 ? endIndexQP : task1Result.length).trim();
  }
  
  return relevantText.trim() || "Nenhuma questão de direito ou processual pendente identificada na Tarefa 1.";
};


export const generateTask1Summary = async (pdfBase64: string): Promise<string> => {
  const pdfPart: Part = {
    inlineData: {
      mimeType: 'application/pdf',
      data: pdfBase64,
    },
  };

  const response: GenerateContentResponse = await ai.models.generateContent({
    model: modelName,
    contents: { parts: [pdfPart], role: "user" }, // Content includes the PDF
    systemInstruction: TASK_01_PROMPT_TEMPLATE, // System instruction guides how to process the PDF
  });
  return response.text;
};

export const generateTask2Report = async (task1Result: string): Promise<string> => {
  const prompt = TASK_02_PROMPT_TEMPLATE(task1Result);
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: modelName,
    contents: prompt, // Task 1 result is part of the prompt
  });
  return response.text;
};

export const generateTask3Analysis = async (task1Result: string): Promise<Task3Data> => {
  const relevantTask1Extract = extractRelevantPartsFromTask1(task1Result);
  const prompt = TASK_03_PROMPT_TEMPLATE(relevantTask1Extract);
  
  const tools: Tool[] = [{ googleSearch: {} as GoogleSearchTool }]; // Cast to satisfy type, actual empty object is fine

  const response: GenerateContentResponse = await ai.models.generateContent({
    model: modelName,
    contents: prompt,
    config: {
      tools: tools,
    }
  });
  
  const analysisText = response.text;
  const searchResults = response.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingChunk[] || undefined;

  return {
    analysis: analysisText,
    searchResults: searchResults,
  };
};


export const generateTask4Sentence = async (task1Result: string, task3Analysis: string): Promise<string> => {
  const prompt = TASK_04_PROMPT_TEMPLATE(task1Result, task3Analysis);
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: modelName,
    contents: prompt,
  });
  return response.text;
};
    
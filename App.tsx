
import React, { useState, useCallback, useEffect } from 'react';
import { FileUpload } from './components/FileUpload';
import { TaskOutput } from './components/TaskOutput';
import { LoadingSpinner, CheckCircleIcon, ExclamationTriangleIcon } from './components/icons';
import { generateTask1Summary, generateTask2Report, generateTask3Analysis, generateTask4Sentence } from './services/geminiService';
import { TaskStage, Task3Data } from './types';

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      const base64Content = result.split(',')[1];
      if (base64Content) {
        resolve(base64Content);
      } else {
        reject(new Error("Falha ao extrair conteúdo base64 do arquivo."));
      }
    };
    reader.onerror = (error) => reject(error);
  });
};

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileContentBase64, setFileContentBase64] = useState<string | null>(null);
  const [currentStage, setCurrentStage] = useState<TaskStage>(TaskStage.INITIAL);
  
  const [task1Data, setTask1Data] = useState<string | null>(null);
  const [task2Data, setTask2Data] = useState<string | null>(null);
  const [task3Data, setTask3Data] = useState<Task3Data | null>(null);
  const [task4Data, setTask4Data] = useState<string | null>(null);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentVisibleTask, setCurrentVisibleTask] = useState<string | null>(null);

  const resetState = useCallback(() => {
    setSelectedFile(null);
    setFileContentBase64(null);
    setCurrentStage(TaskStage.INITIAL);
    setTask1Data(null);
    setTask2Data(null);
    setTask3Data(null);
    setTask4Data(null);
    setIsLoading(false);
    setError(null);
    setCurrentVisibleTask(null);
  }, []);

  const handleFileSelect = useCallback(async (file: File) => {
    setSelectedFile(file);
    setError(null);
    setIsLoading(true);
    setCurrentStage(TaskStage.FILE_PROCESSING);
    try {
      const base64 = await fileToBase64(file);
      setFileContentBase64(base64);
      setCurrentStage(TaskStage.FILE_READY);
    } catch (e) {
      console.error("Error processing file:", e);
      setError(e instanceof Error ? e.message : String(e));
      setCurrentStage(TaskStage.ERROR);
      setSelectedFile(null); // Clear invalid file
    } finally {
      setIsLoading(false);
    }
  }, []);

  const executeTask = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      if (currentStage === TaskStage.FILE_READY && fileContentBase64) {
        setCurrentStage(TaskStage.TASK1_PENDING);
        setCurrentVisibleTask("Tarefa 1: Resumo do Processo");
        const result = await generateTask1Summary(fileContentBase64);
        setTask1Data(result);
        setCurrentStage(TaskStage.TASK1_COMPLETED);
      } else if (currentStage === TaskStage.TASK1_COMPLETED && task1Data) {
        setCurrentStage(TaskStage.TASK2_PENDING);
        setCurrentVisibleTask("Tarefa 2: Relatório do Processo");
        const result = await generateTask2Report(task1Data);
        setTask2Data(result);
        setCurrentStage(TaskStage.TASK2_COMPLETED);
      } else if (currentStage === TaskStage.TASK2_COMPLETED && task1Data) {
        setCurrentStage(TaskStage.TASK3_PENDING);
        setCurrentVisibleTask("Tarefa 3: Análise do Processo");
        const result = await generateTask3Analysis(task1Data);
        setTask3Data(result);
        setCurrentStage(TaskStage.TASK3_COMPLETED);
      } else if (currentStage === TaskStage.TASK3_COMPLETED && task1Data && task3Data) {
        setCurrentStage(TaskStage.TASK4_PENDING);
        setCurrentVisibleTask("Tarefa 4: Elaboração da Sentença");
        const result = await generateTask4Sentence(task1Data, task3Data.analysis);
        setTask4Data(result);
        setCurrentStage(TaskStage.TASK4_COMPLETED);
      }
    } catch (e) {
      console.error("Error executing task:", e);
      setError(e instanceof Error ? e.message : String(e));
      // Rollback to previous completed stage or error stage
      if (currentStage === TaskStage.TASK1_PENDING) setCurrentStage(TaskStage.FILE_READY);
      else if (currentStage === TaskStage.TASK2_PENDING) setCurrentStage(TaskStage.TASK1_COMPLETED);
      else if (currentStage === TaskStage.TASK3_PENDING) setCurrentStage(TaskStage.TASK2_COMPLETED);
      else if (currentStage === TaskStage.TASK4_PENDING) setCurrentStage(TaskStage.TASK3_COMPLETED);
      else setCurrentStage(TaskStage.ERROR);
    } finally {
      setIsLoading(false);
    }
  }, [currentStage, fileContentBase64, task1Data, task3Data]);
  
  useEffect(() => {
    if (currentStage === TaskStage.TASK1_COMPLETED && !currentVisibleTask) {
      setCurrentVisibleTask("Tarefa 1: Resumo do Processo");
    } else if (currentStage === TaskStage.TASK2_COMPLETED && (!currentVisibleTask || currentVisibleTask === "Tarefa 1: Resumo do Processo")) {
      setCurrentVisibleTask("Tarefa 2: Relatório do Processo");
    } else if (currentStage === TaskStage.TASK3_COMPLETED && (!currentVisibleTask || currentVisibleTask === "Tarefa 2: Relatório do Processo")) {
      setCurrentVisibleTask("Tarefa 3: Análise do Processo");
    } else if (currentStage === TaskStage.TASK4_COMPLETED && (!currentVisibleTask || currentVisibleTask === "Tarefa 3: Análise do Processo")) {
       setCurrentVisibleTask("Tarefa 4: Elaboração da Sentença");
    }

  }, [currentStage, currentVisibleTask]);


  const getButtonTextAndAction = (): { text: string; action?: () => void; disabled: boolean; icon?: React.ReactNode } => {
    if (isLoading && currentStage !== TaskStage.FILE_PROCESSING) return { text: "Processando...", disabled: true, icon: <LoadingSpinner className="w-5 h-5 mr-2" /> };
    if (currentStage === TaskStage.FILE_PROCESSING) return { text: "Processando arquivo...", disabled: true, icon: <LoadingSpinner className="w-5 h-5 mr-2" /> };
    
    switch (currentStage) {
      case TaskStage.INITIAL:
      case TaskStage.ERROR: // Allow re-upload on error
        return { text: "Selecione o PDF para Iniciar", action: undefined, disabled: true }; // FileUpload handles action
      case TaskStage.FILE_READY:
        return { text: "Iniciar Tarefa 1: Resumo", action: executeTask, disabled: !fileContentBase64 };
      case TaskStage.TASK1_COMPLETED:
        return { text: "Próximo: Tarefa 2 - Relatório", action: executeTask, disabled: !task1Data, icon: <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" /> };
      case TaskStage.TASK2_COMPLETED:
        return { text: "Próximo: Tarefa 3 - Análise (com Pesquisa)", action: executeTask, disabled: !task2Data, icon: <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" /> };
      case TaskStage.TASK3_COMPLETED:
        return { text: "Próximo: Tarefa 4 - Sentença", action: executeTask, disabled: !task3Data, icon: <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" /> };
      case TaskStage.TASK4_COMPLETED:
        return { text: "Processo Concluído! Reiniciar?", action: resetState, disabled: false, icon: <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" /> };
      default:
        return { text: "Aguardando...", disabled: true };
    }
  };

  const buttonState = getButtonTextAndAction();

  const renderOutput = () => {
    if (!currentVisibleTask) return <div className="p-6 bg-white rounded-lg shadow-lg h-full flex items-center justify-center text-gray-500">Selecione um arquivo PDF para iniciar.</div>;
    
    let content: string | null = null;
    let searchResults: Task3Data['searchResults'] = undefined;
    let title = currentVisibleTask;
    let taskIsLoading = isLoading && (
      (currentStage === TaskStage.TASK1_PENDING && title === "Tarefa 1: Resumo do Processo") ||
      (currentStage === TaskStage.TASK2_PENDING && title === "Tarefa 2: Relatório do Processo") ||
      (currentStage === TaskStage.TASK3_PENDING && title === "Tarefa 3: Análise do Processo") ||
      (currentStage === TaskStage.TASK4_PENDING && title === "Tarefa 4: Elaboração da Sentença")
    );

    if (title === "Tarefa 1: Resumo do Processo") content = task1Data;
    else if (title === "Tarefa 2: Relatório do Processo") content = task2Data;
    else if (title === "Tarefa 3: Análise do Processo") {
      content = task3Data?.analysis || null;
      searchResults = task3Data?.searchResults;
    }
    else if (title === "Tarefa 4: Elaboração da Sentença") content = task4Data;
    
    return <TaskOutput title={title} content={content} isLoading={taskIsLoading} searchResults={searchResults} error={error && currentVisibleTask === title ? error : null} />;
  };
  
  const taskStagesForSidebar = [
    { stage: TaskStage.TASK1_COMPLETED, data: task1Data, title: "Tarefa 1: Resumo do Processo" },
    { stage: TaskStage.TASK2_COMPLETED, data: task2Data, title: "Tarefa 2: Relatório do Processo" },
    { stage: TaskStage.TASK3_COMPLETED, data: task3Data, title: "Tarefa 3: Análise do Processo" },
    { stage: TaskStage.TASK4_COMPLETED, data: task4Data, title: "Tarefa 4: Elaboração da Sentença" },
  ];


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <header className="p-6 shadow-xl bg-slate-800/50 backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          Agente IA para Análise de Processos Judiciais
        </h1>
      </header>

      <main className="flex-grow flex flex-col md:flex-row p-4 gap-4">
        {/* Control Panel */}
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-slate-800/70 p-6 rounded-xl shadow-2xl flex flex-col space-y-6 backdrop-blur-lg">
          <FileUpload onFileSelect={handleFileSelect} selectedFile={selectedFile} disabled={isLoading || currentStage !== TaskStage.INITIAL && currentStage !== TaskStage.ERROR && currentStage !== TaskStage.FILE_READY} />
          
          {buttonState.action && (
            <button
              onClick={buttonState.action}
              disabled={buttonState.disabled || isLoading}
              className="w-full flex items-center justify-center px-6 py-3 bg-sky-500 hover:bg-sky-600 disabled:bg-gray-500 text-white font-semibold rounded-lg shadow-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75"
            >
              {buttonState.icon}
              {buttonState.text}
            </button>
          )}
           {!buttonState.action && currentStage === TaskStage.INITIAL && (
             <div className="text-center text-sm text-slate-400 py-3">Carregue um arquivo PDF para habilitar as ações.</div>
           )}


          {error && (currentStage === TaskStage.ERROR || (currentStage !== TaskStage.INITIAL && currentStage !== TaskStage.FILE_READY)) && (
            <div className="mt-4 p-3 bg-red-500/20 text-red-300 border border-red-500 rounded-lg flex items-start space-x-2">
              <ExclamationTriangleIcon className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" />
              <div>
                <p className="font-semibold text-sm">Erro:</p>
                <p className="text-xs">{error}</p>
              </div>
            </div>
          )}

          {(currentStage >= TaskStage.TASK1_COMPLETED && currentStage !== TaskStage.ERROR) && (
            <div className="space-y-2 pt-4 border-t border-slate-700">
              <h4 className="text-sm font-semibold text-slate-400 mb-2">Navegar Resultados:</h4>
              {taskStagesForSidebar.map(task => {
                if (task.data) {
                  return (
                    <button 
                      key={task.title}
                      onClick={() => {setCurrentVisibleTask(task.title); setError(null);}}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${currentVisibleTask === task.title ? 'bg-sky-500/30 text-sky-300' : 'hover:bg-slate-700/50 text-slate-300'}`}
                    >
                      {task.title}
                    </button>
                  );
                }
                return null;
              })}
            </div>
          )}

          {currentStage === TaskStage.TASK3_COMPLETED && task3Data && (currentStage >= TaskStage.TASK4_PENDING || currentVisibleTask === "Tarefa 4: Elaboração da Sentença") && (
            <div className="mt-4 p-4 bg-slate-700/50 rounded-lg max-h-60 overflow-y-auto">
              <h4 className="text-md font-semibold mb-2 text-sky-400 sticky top-0 bg-slate-700/50 py-1">Resumo Tarefa 3 (Análise)</h4>
              <p className="text-xs text-slate-300 whitespace-pre-wrap truncate-3-lines">{task3Data.analysis.substring(0,300)}...</p>
              {task3Data.searchResults && task3Data.searchResults.length > 0 && (
                <div className="mt-2">
                   <p className="text-xs font-semibold text-sky-500 mb-1">Fontes ({task3Data.searchResults.length}):</p>
                   <ul className="list-disc pl-4 space-y-0.5">
                    {task3Data.searchResults.slice(0,3).map((sr, i) => sr.web && (
                        <li key={i} className="text-xs text-slate-400 truncate" title={sr.web.title || sr.web.uri}>
                            <a href={sr.web.uri} target="_blank" rel="noopener noreferrer" className="hover:underline">{sr.web.title || sr.web.uri}</a>
                        </li>
                    ))}
                   </ul>
                </div>
              )}
              <button 
                onClick={() => setCurrentVisibleTask("Tarefa 3: Análise do Processo")}
                className="text-xs text-sky-400 hover:underline mt-2"
              >
                Ver Tarefa 3 completa
              </button>
            </div>
          )}


        </aside>

        {/* Output Panel */}
        <section className="w-full md:w-2/3 lg:w-3/4 bg-slate-800/30 p-1 rounded-xl shadow-inner backdrop-blur-sm">
          <div className="h-full max-h-[calc(100vh-12rem)] "> {/* Ensure output area is scrollable and fits viewport */}
            {renderOutput()}
          </div>
        </section>
      </main>
       <footer className="p-4 text-center text-xs text-slate-500">
        Desenvolvido com React, TailwindCSS e Gemini API.
      </footer>
    </div>
  );
};

export default App;
    
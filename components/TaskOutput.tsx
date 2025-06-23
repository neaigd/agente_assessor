
import React from 'react';
import { GroundingChunk } from '../types';

interface TaskOutputProps {
  title: string;
  content: string | null;
  isLoading?: boolean;
  searchResults?: GroundingChunk[];
  error?: string | null;
}

export const TaskOutput: React.FC<TaskOutputProps> = ({ title, content, isLoading, searchResults, error }) => {
  if (isLoading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg h-full flex items-center justify-center">
        <p className="text-gray-600">Processando {title}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 text-red-700 rounded-lg shadow-lg h-full">
        <h3 className="text-xl font-semibold mb-3 text-red-800">{title} - Erro</h3>
        <pre className="whitespace-pre-wrap text-sm">{error}</pre>
      </div>
    );
  }
  
  if (!content && (!searchResults || searchResults.length === 0)) {
     return (
      <div className="p-6 bg-white rounded-lg shadow-lg h-full flex items-center justify-center">
        <p className="text-gray-500">Aguardando dados para {title}.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg h-full overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 sticky top-0 bg-white py-2 border-b">{title}</h3>
      {content && (
        <pre className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed">{content}</pre>
      )}
      {searchResults && searchResults.length > 0 && (
        <div className="mt-6 pt-4 border-t">
          <h4 className="text-md font-semibold mb-2 text-gray-700">Fontes da Pesquisa (Google Search):</h4>
          <ul className="list-disc pl-5 space-y-1">
            {searchResults.map((result, index) => (
              result.web && (
                <li key={index} className="text-sm">
                  <a
                    href={result.web.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                    title={result.web.uri}
                  >
                    {result.web.title || result.web.uri}
                  </a>
                </li>
              )
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
    
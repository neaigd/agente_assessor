
import React, { useRef } from 'react';
import { UploadIcon, FileIcon } from './icons';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  disabled?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, selectedFile, disabled }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onFileSelect(event.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />
      {!selectedFile ? (
        <button
          onClick={handleButtonClick}
          disabled={disabled}
          className="w-full flex flex-col items-center justify-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-md border border-blue-300 hover:bg-blue-50 disabled:bg-gray-200 disabled:cursor-not-allowed transition-colors duration-150 ease-in-out"
        >
          <UploadIcon className="w-12 h-12 mb-2" />
          <span className="font-semibold">Selecionar PDF do Processo</span>
          <span className="text-xs text-gray-500">Arraste e solte ou clique para carregar</span>
        </button>
      ) : (
        <div className="w-full p-4 bg-green-50 text-green-700 rounded-lg shadow-sm border border-green-300 flex items-center space-x-3">
          <FileIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm">Arquivo Selecionado:</p>
            <p className="text-xs truncate" title={selectedFile.name}>{selectedFile.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};
    
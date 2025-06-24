
# Agente Assessor - Análise de Processos Judiciais

[![Documentação](https://img.shields.io/badge/docs-mkdocs-blue)](https://neaigd.github.io/agente_assessor/)
[![Licença](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-20.x-brightgreen)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://www.docker.com/)

Este repositório contém tudo o que você precisa para executar seu aplicativo localmente.

## 📖 Documentação Completa

**[📚 Acesse a Documentação Oficial](https://neaigd.github.io/agente_assessor/)**

A documentação completa inclui:
- 🚀 Guias de instalação detalhados
- 📋 Manual do usuário passo a passo
- ⚙️ Configurações avançadas
- 🔧 Referência da API
- 🛠️ Guia para desenvolvedores

## Requisitos do Sistema

### Para Execução Local
- **Node.js** 20.x ou superior
- **npm** (incluído com Node.js)
- **Chave de API do Google Gemini**

### Para Execução com Serviços Diretos
- **Node.js** 20.x ou superior
- **Nginx** (versão estável mais recente)
- **Sistema operacional:** Linux, macOS ou Windows

### Para Execução com Docker
- **Docker** 20.10 ou superior
- **Docker Compose** 2.0 ou superior
- **Sistema operacional:** Linux, macOS ou Windows

**Escolha um dos seguintes métodos para executar o aplicativo:**

## Executar Localmente

**Pré-requisitos:** Node.js

1.  Instale as dependências:
    `npm install`
2.  Defina a `GEMINI_API_KEY` no arquivo [.env.local](https://www.google.com/search?q=.env.local) para a sua chave de API do Gemini.
3.  Execute o aplicativo:
    `npm run dev`

## Executar Serviços Diretamente

Os serviços de backend deste projeto (servidor Node.js e Nginx) podem ser executados diretamente na sua máquina host usando o script `start_services.sh`.

**Pré-requisitos:** Node.js e Nginx instalados e configurados.

1.  **Defina as variáveis de ambiente:** Certifique-se de que você tem as variáveis de ambiente necessárias definidas, incluindo a `GEMINI_API_KEY`. Você pode defini-las no seu shell ou usar um arquivo `.env` carregado pela sua aplicação.

2.  **Torne o script executável:** Dê permissões de execução ao script de inicialização.

    ```bash
    chmod +x start_services.sh
    ```

3.  **Inicie os serviços:** Execute o script `start_services.sh`. Isso iniciará o servidor Node.js e o Nginx em segundo plano.

    ```bash
    ./start_services.sh
    ```

## Executar com Docker

Este projeto também pode ser executado usando contêineres Docker.

**Pré-requisitos:** Docker e Docker Compose instalados.

1.  **Crie o arquivo `.env.local`:** Copie o arquivo de ambiente de exemplo e adicione sua chave de API.

    ```bash
    cp .env.local.example .env.local
    ```

    Edite o arquivo `.env.local` e substitua `"inclua aqui sua chave api"` pela sua chave de API real do Gemini.

2.  **Torne os scripts executáveis:** Dê permissões de execução aos scripts de inicialização e limpeza.

    ```bash
    chmod +x start.sh cleanup.sh
    ```

3.  **Inicie a aplicação:** Execute o script `start.sh`. Isso irá construir a imagem Docker (se necessário), iniciar os contêineres e abrir a aplicação no seu navegador nas portas 5010 e 88.

    ```bash
    ./start.sh
    ```

4.  **Limpeza:** Para parar e remover os contêineres e imagens Docker, execute o script `cleanup.sh`.

    ```bash
    ./cleanup.sh
    ```

## Instruções Específicas para Windows

### Executar Serviços Diretamente no Windows

1.  **Defina as variáveis de ambiente:** Certifique-se de que você tem as variáveis de ambiente necessárias definidas, incluindo a `GEMINI_API_KEY`.

2.  **Inicie os serviços:** Execute o script batch `start_services.bat`. Isso iniciará o servidor Node.js e o Nginx.

    ```cmd
    start_services.bat
    ```

### Executar com Docker no Windows

1.  **Crie o arquivo `.env.local`:** Copie o arquivo de ambiente de exemplo e adicione sua chave de API.

    ```cmd
    copy .env.local.example .env.local
    ```

    Edite o arquivo `.env.local` e substitua `"inclua aqui sua chave api"` pela sua chave de API real do Gemini.

2.  **Inicie a aplicação:** Execute o script PowerShell `start.ps1`. Isso irá construir a imagem Docker (se necessário), iniciar os contêineres e abrir a aplicação no seu navegador.

    **No PowerShell:**
    ```powershell
    .\start.ps1
    ```

    **No Prompt de Comando:**
    ```cmd
    powershell -ExecutionPolicy Bypass -File start.ps1
    ```

3.  **Limpeza:** Para parar e remover os contêineres e imagens Docker, execute o script `cleanup.bat`.

    ```cmd
    cleanup.bat
    ```

### Instalação de Pré-requisitos no Windows

#### Node.js
1. Baixe e instale o Node.js do site oficial: https://nodejs.org/
2. Verifique a instalação executando:
   ```cmd
   node --version
   npm --version
   ```

#### Docker no Windows
1. Baixe e instale o Docker Desktop: https://www.docker.com/products/docker-desktop/
2. Certifique-se de que o Docker Desktop está rodando
3. Verifique a instalação:
   ```cmd
   docker --version
   docker compose version
   ```

#### Nginx no Windows (se executar serviços diretamente)
1. Baixe o Nginx para Windows: http://nginx.org/en/download.html
2. Extraia os arquivos e adicione o diretório ao PATH do sistema
3. Verifique a instalação:
   ```cmd
   nginx -v
   ```

## Funcionalidades

  - **Análise Jurídica com IA**: Análise automatizada de processos judiciais usando a IA do Google Gemini.
  - **Geração de Documentos**: Geração automática de documentos ODT a partir dos resultados da análise.
  - **Gerenciamento de Anotações**: Salve e gerencie anotações de análise para cada tarefa.
  - **Interface Responsiva**: Interface web moderna e responsiva construída com React e Tailwind CSS.
  - **Implantação com Docker**: Solução completa em contêineres com backend em Node.js e Nginx.

## Autores

  - **Luiz Peixoto de Siqueira Filho**
  - **Vallerie Maia Esmeraldo de Oliveira**

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

## Contribuições

Contribuições são bem-vindas\! Sinta-se à vontade para enviar um Pull Request.
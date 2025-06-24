# Agente Assessor - Análise de Processos Judiciais

Bem-vindo à documentação do **Agente Assessor**, um sistema inovador de análise jurídica automatizada que utiliza inteligência artificial para auxiliar profissionais do direito na análise de processos judiciais.

## 🚀 Visão Geral

O Agente Assessor é uma aplicação web moderna que combina o poder da IA do Google Gemini com uma interface intuitiva para fornecer análises jurídicas precisas e eficientes.

### Principais Características

✅ **Análise Jurídica com IA**: Análise automatizada de processos judiciais usando a IA do Google Gemini  
✅ **Geração de Documentos**: Geração automática de documentos ODT a partir dos resultados da análise  
✅ **Gerenciamento de Anotações**: Salve e gerencie anotações de análise para cada tarefa  
✅ **Interface Responsiva**: Interface web moderna e responsiva construída com React e Tailwind CSS  
✅ **Implantação com Docker**: Solução completa em contêineres com backend em Node.js e Nginx  

## 🎯 Para Quem é Destinado

- **Advogados, Defensores, Promotores, Juizes e Servidores da Justiça** que buscam otimizar a análise de processos
- **Escritórios de Advocacia** que desejam automatizar fluxos de trabalho
- **Estudantes de Direito** interessados em tecnologia jurídica
- **Desenvolvedores** que trabalham com soluções legtech
- 

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **IA**: Google Gemini API
- **Containerização**: Docker, Docker Compose
- **Servidor Web**: Nginx
- **Documentação**: MkDocs Material

## 📋 Requisitos do Sistema

=== "Execução Local"
    - Node.js 20.x ou superior
    - npm (incluído com Node.js)
    - Chave de API do Google Gemini

=== "Docker"
    - Docker 20.10 ou superior
    - Docker Compose 2.0 ou superior
    - Chave de API do Google Gemini

=== "Serviços Diretos"
    - Node.js 20.x ou superior
    - Nginx (versão estável mais recente)
    - Chave de API do Google Gemini

## 🚀 Início Rápido

1. **Clone o repositório**
   ```bash
   git clone https://github.com/neaigd/agente_assessor.git
   cd agente_assessor
   ```

2. **Configure a API do Gemini**
   ```bash
   cp .env.local.example .env.local
   # Edite .env.local e adicione sua chave API
   ```

3. **Execute a aplicação**
   ```bash
   # Opção 1: Execução local
   npm install
   npm run dev
   
   # Opção 2: Docker
   ./start.sh
   ```

4. **Acesse a aplicação**
   - Desenvolvimento: `http://localhost:5173`
   - Docker: `http://localhost:5010` ou `http://localhost:88`

## 📚 Navegação da Documentação

Esta documentação está organizada nas seguintes seções:

- **[Instalação](installation/requirements.md)**: Guias detalhados para diferentes métodos de instalação
- **[Guia do Usuário](user-guide/getting-started.md)**: Como usar o sistema passo a passo
- **[Configuração](configuration/environment.md)**: Configurações avançadas e personalização
- **[API](api/reference.md)**: Documentação técnica da API
- **[Desenvolvimento](development/architecture.md)**: Informações para desenvolvedores
- **[Sobre](about/license.md)**: Licença, autores e changelog

## 🤝 Contribuições

Contribuições são bem-vindas! Consulte nosso [guia de contribuição](development/contributing.md) para saber como participar do desenvolvimento do projeto.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](about/license.md).

## 👥 Autores

- **Luiz Peixoto de Siqueira Filho**
- **Vallerie Maia Esmeraldo de Oliveira**

---

!!! tip "Precisa de Ajuda?"
    Se você encontrou algum problema ou tem dúvidas, consulte nossa documentação ou abra uma [issue no GitHub](https://github.com/username/agente_assessor/issues).

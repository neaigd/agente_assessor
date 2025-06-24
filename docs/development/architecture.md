# Arquitetura do Projeto

Este documento descreve a arquitetura geral do Agente Assessor, detalhando seus principais componentes e como eles interagem.

## Visão Geral

O Agente Assessor segue uma arquitetura cliente-servidor, onde o frontend (cliente) se comunica com o backend (servidor) para realizar as análises e gerenciar dados. O Nginx atua como um reverse proxy, e o Google Gemini é o serviço de IA subjacente.

## Componentes Principais

### Frontend

- Desenvolvido com React e TypeScript.
- Interface do usuário responsiva construída com Tailwind CSS.
- Executado no navegador do usuário.
- Responsável por:
    - Apresentar a interface.
    - Capturar a entrada do usuário (texto do processo, configurações).
    - Enviar requisições para o backend.
    - Exibir os resultados da análise e documentos gerados.
    - Gerenciar o histórico e anotações no lado do cliente (se aplicável).

### Backend (Servidor Node.js)

- Desenvolvido com Node.js e possivelmente Express ou framework similar (com base em `server.js`).
- Responsável por:
    - Receber requisições do frontend.
    - Interagir com a API do Google Gemini para realizar as análises.
    - Processar e formatar os resultados da análise.
    - Gerenciar a lógica de negócio.
    - Possivelmente lidar com o salvamento e recuperação de anotações/histórico.

### Nginx

- Atua como reverse proxy.
- Responsável por:
    - Servir os arquivos estáticos do frontend.
    - Redirecionar requisições API para o servidor Node.js.
    - Lidar com SSL/TLS (se configurado).
    - Gerenciar o tráfego de rede.

### Google Gemini API

- Serviço de inteligência artificial fornecido pelo Google.
- Utilizado pelo backend para realizar a análise textual dos processos judiciais e gerar conteúdos baseados no texto e tipo de análise solicitada.

### Docker

- Utilizado para conteinerização da aplicação (`Dockerfile`, `docker-compose.yml`).
- Facilita a configuração e execução do ambiente, empacotando o frontend, backend e Nginx em contêineres isolados.

### Documentação (MkDocs)

- Gerada usando MkDocs (`mkdocs.yml`).
- Contém guias de instalação, manual do usuário, configuração, referência da API e guia para desenvolvedores.
- O site da documentação é geralmente servido estaticamente (por exemplo, via GitHub Pages ou Nginx).

## Fluxo de Dados Básico

1.  O usuário interage com o **Frontend** no navegador.
2.  O Frontend envia uma requisição (por exemplo, para analisar um texto) para o **Nginx**.
3.  O Nginx, atuando como reverse proxy, encaminha a requisição para o **Backend** (servidor Node.js).
4.  O Backend processa a requisição e faz chamadas para a **Google Gemini API**.
5.  A Google Gemini API retorna os resultados da análise para o Backend.
6.  O Backend processa os resultados e os envia de volta para o Nginx.
7.  O Nginx encaminha a resposta para o **Frontend**.
8.  O Frontend exibe os resultados da análise para o usuário.

Esta arquitetura modular permite a escalabilidade e a manutenção independente dos componentes.

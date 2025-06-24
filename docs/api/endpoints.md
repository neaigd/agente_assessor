# Endpoints da API

Este documento lista e descreve os endpoints disponíveis na API do backend do Agente Assessor. Estes endpoints são utilizados pelo frontend para interagir com a lógica de negócio e os serviços de análise.

**Nota:** Esta seção fornece uma visão geral dos endpoints esperados. Detalhes específicos sobre métodos HTTP, parâmetros de requisição e formatos de resposta devem ser confirmados diretamente no código fonte do backend (`server.js` e `services/`).

## Endpoints Principais (Esperados)

### `POST /api/analyze`

- **Descrição:** Envia texto e configurações para análise pela IA do Google Gemini.
- **Método:** `POST`
- **Corpo da Requisição (Esperado):** Objeto JSON contendo o texto do processo e as opções de análise (tipo de análise, nível de detalhe, etc.).
- **Resposta (Esperada):** Objeto JSON contendo os resultados da análise (relatório, pontos principais, recomendações).

### `POST /api/generate-document`

- **Descrição:** Gera um documento (por exemplo, ODT) com base nos resultados de uma análise.
- **Método:** `POST`
- **Corpo da Requisição (Esperado):** Objeto JSON contendo os dados da análise e as opções de geração de documento (formato, template, etc.).
- **Resposta (Esperada):** O documento gerado, possivelmente como um arquivo para download ou um link.

### `GET /api/history`

- **Descrição:** Retorna o histórico de análises realizadas pelo usuário.
- **Método:** `GET`
- **Parâmetros de Query (Esperados):** Parâmetros para paginação, filtragem ou busca (por exemplo, `?page=1&limit=10`, `?search=termo`).
- **Resposta (Esperada):** Objeto JSON contendo uma lista de análises anteriores.

### `POST /api/notes`

- **Descrição:** Salva ou atualiza anotações para uma análise específica.
- **Método:** `POST`
- **Corpo da Requisição (Esperado):** Objeto JSON contendo o identificador da análise e o texto das anotações.
- **Resposta (Esperada):** Confirmação do salvamento ou erro.

### `GET /api/notes/{analysis_id}`

- **Descrição:** Recupera anotações para uma análise específica.
- **Método:** `GET`
- **Parâmetros de Rota:** `analysis_id` (identificador da análise).
- **Resposta (Esperada):** Objeto JSON contendo as anotações para a análise especificada.

## Autenticação e Autorização

(Esta seção precisa ser detalhada com base na implementação real. Por exemplo, se chaves de API, tokens JWT, ou outro método é usado.)

## Exemplos de Uso

(Esta seção pode incluir exemplos de requisições usando `curl` ou outro cliente HTTP, uma vez que os endpoints estejam confirmados.)

# Configuração do Google Gemini

Para utilizar o Agente Assessor, é necessário configurar sua chave de API do Google Gemini, que será utilizada para a análise de processos judiciais.

## Obtendo sua Chave de API

Caso você ainda não possua uma chave de API do Google Gemini, siga as instruções na [documentação oficial do Google AI for Developers](https://ai.google.dev/).

## Configurando a Chave de API

A forma de configurar a chave de API depende do método de execução do Agente Assessor:

### Execução Local e com Docker

1. Crie uma cópia do arquivo `.env.local.example` na raiz do projeto e renomeie-a para `.env.local`.
2. Abra o arquivo `.env.local`.
3. Localize a linha que define `GEMINI_API_KEY`.
4. Substitua o placeholder pelo valor da sua chave de API do Google Gemini.

```dotenv
GEMINI_API_KEY="SUA_CHAVE_DE_API_AQUI"
```

### Execução com Serviços Diretos

Defina a variável de ambiente `GEMINI_API_KEY` no seu sistema operacional antes de executar os scripts de inicialização. A forma de fazer isso varia dependendo do sistema operacional (Linux, macOS, Windows).

**Exemplo (Linux/macOS):**

```bash
export GEMINI_API_KEY="SUA_CHAVE_DE_API_AQUI"
```

**Exemplo (Windows - Prompt de Comando):**

```cmd
set GEMINI_API_KEY=SUA_CHAVE_DE_API_AQUI
```

**Exemplo (Windows - PowerShell):**

```powershell
$env:GEMINI_API_KEY="SUA_CHAVE_DE_API_AQUI"
```

Certifique-se de que a variável de ambiente esteja disponível na sessão do terminal em que você executar os scripts de inicialização dos serviços.

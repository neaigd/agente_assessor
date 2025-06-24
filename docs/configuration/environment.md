# Variáveis de Ambiente

Esta seção documenta todas as variáveis de ambiente utilizadas pelo Agente Assessor.

## 🔑 Variável Obrigatória

### GEMINI_API_KEY

**Descrição**: Chave de API do Google Gemini para funcionalidades de IA  
**Tipo**: String  
**Obrigatório**: Sim  
**Exemplo**: `GEMINI_API_KEY=AIzaSyA...`

Como obter:
1. Acesse [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Faça login com sua conta Google
3. Crie uma nova chave de API
4. Configure no arquivo `.env.local`

## ⚙️ Variáveis Opcionais

### NODE_ENV
**Padrão**: `development`  
**Valores**: `development`, `production`, `test`

### VITE_PORT
**Padrão**: `5173`  
**Descrição**: Porta do servidor de desenvolvimento

### VITE_API_BASE_URL
**Padrão**: `http://localhost:3001`  
**Descrição**: URL base da API backend

## 📝 Arquivo .env.local

Exemplo de configuração completa:

```env
# Obrigatório
GEMINI_API_KEY=sua_chave_api_aqui

# Opcional
NODE_ENV=development
VITE_PORT=5173
VITE_API_BASE_URL=http://localhost:3001
```

Para mais detalhes, consulte a [documentação completa de configuração](../installation/local.md#configurar-as-variáveis-de-ambiente).

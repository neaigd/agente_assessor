# Execução Local

A execução local é a forma mais rápida de testar e desenvolver o Agente Assessor. Este método executa a aplicação diretamente em sua máquina usando Node.js.

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem:

- ✅ [Node.js 20.x ou superior](requirements.md#nodejs)
- ✅ [Chave de API do Google Gemini](requirements.md#chave-de-api-do-google-gemini)
- ✅ Conexão com a internet

## 🚀 Instalação Passo a Passo

### 1. Clone o Repositório

```bash
git clone https://github.com/neaigd/agente_assessor.git
cd agente_assessor
```

### 2. Instale as Dependências

```bash
npm install
```

!!! tip "Instalação Rápida"
    O comando `npm install` irá instalar todas as dependências necessárias automaticamente. Isso pode levar alguns minutos na primeira execução.

### 3. Configure as Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.local.example .env.local

# Edite o arquivo com sua chave API
nano .env.local  # ou use seu editor preferido
```

Edite o arquivo `.env.local` e substitua o valor da variável:

```env
GEMINI_API_KEY=sua_chave_api_aqui
```

!!! warning "Segurança"
    Nunca compartilhe sua chave de API do Gemini publicamente. O arquivo `.env.local` já está incluído no `.gitignore` para evitar commits acidentais.

### 4. Execute a Aplicação

```bash
npm run dev
```

### 5. Acesse a Aplicação

Após iniciar o servidor, a aplicação estará disponível em:

**🌐 http://localhost:5173**

O terminal mostrará uma mensagem similar a:

```
  VITE v6.2.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## 🔧 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila a aplicação para produção |
| `npm run preview` | Visualiza a build de produção |

## 🐛 Solução de Problemas

### Erro: "GEMINI_API_KEY não definida"

**Problema**: A aplicação não consegue encontrar a chave de API.

**Solução**:
1. Verifique se o arquivo `.env.local` existe
2. Confirme se a variável `GEMINI_API_KEY` está definida corretamente
3. Reinicie o servidor de desenvolvimento

### Erro: "Porta 5173 já em uso"

**Problema**: Outra aplicação está usando a porta 5173.

**Solução**:
```bash
# Parar outros processos na porta
npx kill-port 5173

# Ou usar uma porta diferente
npm run dev -- --port 3000
```

### Erro de Dependências

**Problema**: Erro durante `npm install`.

**Solução**:
```bash
# Limpar cache do npm
npm cache clean --force

# Deletar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro de Versão do Node.js

**Problema**: "Node.js version not supported".

**Solução**:
1. Verifique sua versão: `node --version`
2. Atualize para Node.js 20.x ou superior
3. Use um gerenciador de versões como `nvm`:

```bash
# Instalar nvm (se não tiver)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Instalar e usar Node.js 20
nvm install 20
nvm use 20
```

## 🔄 Modo de Desenvolvimento

Durante o desenvolvimento, a aplicação oferece:

- **🔥 Hot Reload**: Mudanças no código são refletidas automaticamente
- **📊 Source Maps**: Depuração facilitada no navegador
- **⚡ Vite**: Build rápido e otimizado
- **🔧 TypeScript**: Verificação de tipos em tempo real

## 📝 Variáveis de Ambiente Opcionais

Além da `GEMINI_API_KEY`, você pode configurar:

```env
# .env.local
GEMINI_API_KEY=sua_chave_api_aqui

# Porta do servidor (opcional)
VITE_PORT=5173

# Modo de desenvolvimento (opcional)
NODE_ENV=development

# URL base da API (opcional)
VITE_API_BASE_URL=http://localhost:3001
```

## 🌐 Acesso pela Rede Local

Para acessar a aplicação de outros dispositivos na mesma rede:

```bash
npm run dev -- --host
```

A aplicação estará disponível em:
- **Local**: http://localhost:5173
- **Rede**: http://[seu-ip]:5173

## 🔄 Atualização

Para atualizar o projeto com as últimas mudanças:

```bash
# Puxar atualizações do repositório
git pull origin main

# Atualizar dependências
npm install

# Reiniciar o servidor
npm run dev
```

## ⏭️ Próximos Passos

Agora que a aplicação está rodando localmente:

1. 📖 Consulte o [Guia do Usuário](../user-guide/getting-started.md) para aprender a usar o sistema
2. ⚙️ Veja a [Configuração](../configuration/environment.md) para personalizações avançadas
3. 🔨 Para produção, considere usar [Docker](docker.md) ou [Serviços Diretos](services.md)

## 💡 Dicas de Desenvolvimento

- Use `Ctrl+C` para parar o servidor
- O arquivo `.env.local` é ignorado pelo Git
- Logs detalhados estão disponíveis no console do navegador
- Use as ferramentas de desenvolvimento do navegador para debug

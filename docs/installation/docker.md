# Execução com Docker

A execução com Docker é o método recomendado para produção e para usuários que preferem um ambiente isolado e pré-configurado.

## 🐳 Vantagens do Docker

- **🔒 Isolamento**: Ambiente completamente isolado do sistema host
- **📦 Portabilidade**: Executa de forma idêntica em qualquer sistema
- **⚡ Facilidade**: Setup automatizado com um comando
- **🔧 Consistência**: Ambiente idêntico para desenvolvimento e produção

## 📋 Pré-requisitos

- ✅ [Docker 20.10 ou superior](requirements.md#docker-engine)
- ✅ [Docker Compose 2.0 ou superior](requirements.md#docker-engine)
- ✅ [Chave de API do Google Gemini](requirements.md#chave-de-api-do-google-gemini)

## 🚀 Instalação Rápida

### 1. Clone e Configure

```bash
# Clone o repositório
git clone https://github.com/neaigd/agente_assessor.git
cd agente_assessor

# Configure as variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local e adicione sua chave API
```

### 2. Execute com Docker

```bash
# Torne o script executável
chmod +x start.sh

# Inicie a aplicação
./start.sh
```

### 3. Acesse a Aplicação

A aplicação estará disponível em:
- **🌐 Principal**: http://localhost:5010
- **🔧 Nginx**: http://localhost:88

## 📁 Estrutura do Docker

O projeto inclui uma configuração Docker completa:

```
📦 agente_assessor/
├── 🐳 Dockerfile          # Imagem da aplicação
├── 🔧 docker-compose.yml  # Orquestração dos serviços
├── 🌐 nginx.conf          # Configuração do Nginx
├── 🚀 start.sh           # Script de inicialização (Linux/macOS)
├── 🚀 start.ps1          # Script de inicialização (Windows)
└── 🧹 cleanup.sh         # Script de limpeza
```

Para mais detalhes sobre a execução com Docker, consulte o README principal do projeto.

## ⚙️ Configurações Avançadas

### Portas Personalizadas

Edite o `docker-compose.yml` para usar portas diferentes:

```yaml
services:
  nginx:
    ports:
      - "8080:80"  # Porta personalizada
```

### Volumes Persistentes

Para manter dados entre reinicializações:

```yaml
services:
  app:
    volumes:
      - ./data:/app/data  # Volume persistente
```

## 🧹 Limpeza

Para remover todos os contêineres e imagens:

```bash
./cleanup.sh
```

## 🔧 Solução de Problemas

### Porta em Uso

```bash
# Verificar portas em uso
docker ps
netstat -tulpn | grep :5010

# Parar contêineres específicos
docker stop agente_assessor_app
```

### Reconstruir Imagem

```bash
docker compose build --no-cache
docker compose up -d
```

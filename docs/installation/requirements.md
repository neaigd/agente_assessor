# Requisitos do Sistema

Antes de instalar o Agente Assessor, certifique-se de que seu sistema atende aos requisitos necessários. O projeto oferece diferentes métodos de execução, cada um com seus próprios pré-requisitos.

## 🔧 Requisitos Gerais

### Chave de API do Google Gemini

**Obrigatório para todos os métodos de instalação**

Você precisará de uma chave de API válida do Google Gemini para utilizar as funcionalidades de IA do sistema.

!!! info "Como obter a chave API"
    1. Acesse [Google AI Studio](https://aistudio.google.com/app/apikey)
    2. Faça login com sua conta Google
    3. Crie um novo projeto ou selecione um existente
    4. Gere uma nova chave de API
    5. Guarde a chave em local seguro

### Sistema Operacional

O Agente Assessor é compatível com:

- **Linux** (Ubuntu 20.04+, Debian 11+, CentOS 8+)
- **macOS** (10.15+)
- **Windows** (10/11 com WSL2 recomendado)

## 💻 Execução Local

### Node.js

- **Versão**: 20.x ou superior
- **Pacote**: npm (incluído com Node.js)

#### Verificação da Instalação

```bash
node --version  # Deve retornar v20.x.x ou superior
npm --version   # Deve retornar 9.x.x ou superior
```

#### Instalação no Ubuntu/Debian

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Instalação no macOS

```bash
# Usando Homebrew
brew install node@20

# Ou baixe do site oficial
# https://nodejs.org/
```

#### Instalação no Windows

1. Baixe o instalador do [site oficial](https://nodejs.org/)
2. Execute o instalador e siga as instruções
3. Reinicie o sistema se necessário

## 🐳 Execução com Docker

### Docker Engine

- **Versão**: 20.10 ou superior
- **Docker Compose**: 2.0 ou superior

#### Verificação da Instalação

```bash
docker --version         # Deve retornar 20.10.x ou superior
docker compose version   # Deve retornar 2.x.x ou superior
```

#### Instalação no Ubuntu/Debian

```bash
# Remover versões antigas
sudo apt-get remove docker docker-engine docker.io containerd runc

# Instalar dependências
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Adicionar chave GPG oficial do Docker
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Configurar repositório
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Adicionar usuário ao grupo docker
sudo usermod -aG docker $USER
```

#### Instalação no macOS

```bash
# Baixar Docker Desktop
# https://www.docker.com/products/docker-desktop/

# Ou usando Homebrew
brew install --cask docker
```

#### Instalação no Windows

1. Baixe o [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Execute o instalador
3. Certifique-se de que o WSL2 está habilitado
4. Reinicie o sistema

## ⚙️ Execução com Serviços Diretos

### Node.js

Mesmo requisito da execução local (ver seção anterior).

### Nginx

- **Versão**: Versão estável mais recente
- **Configuração**: Capaz de servir arquivos estáticos e proxy reverso

#### Verificação da Instalação

```bash
nginx -v  # Deve retornar nginx version: nginx/1.x.x
```

#### Instalação no Ubuntu/Debian

```bash
sudo apt update
sudo apt install nginx

# Iniciar e habilitar o serviço
sudo systemctl start nginx
sudo systemctl enable nginx
```

#### Instalação no macOS

```bash
# Usando Homebrew
brew install nginx

# Iniciar o serviço
brew services start nginx
```

#### Instalação no Windows

1. Baixe o Nginx do [site oficial](http://nginx.org/en/download.html)
2. Extraia os arquivos para `C:\nginx`
3. Adicione `C:\nginx` ao PATH do sistema
4. Configure como serviço (opcional)

## 🔐 Configurações de Segurança

### Firewall

Certifique-se de que as seguintes portas estejam abertas:

- **5173**: Servidor de desenvolvimento (execução local)
- **5010**: Aplicação principal (Docker)
- **88**: Nginx (Docker)
- **80**: Nginx (serviços diretos)
- **443**: HTTPS (produção)

### Permissões

O usuário deve ter permissões para:

- Executar Docker (se aplicável)
- Modificar configurações do Nginx (se aplicável)
- Ler/escrever arquivos no diretório do projeto

## 📊 Recursos de Sistema

### Requisitos Mínimos

- **RAM**: 2GB livres
- **Armazenamento**: 1GB livres
- **CPU**: Dual-core 2.0GHz

### Requisitos Recomendados

- **RAM**: 4GB livres
- **Armazenamento**: 5GB livres
- **CPU**: Quad-core 2.5GHz
- **Conexão**: Internet estável para API do Gemini

## 🧪 Verificação dos Requisitos

Execute este script para verificar se todos os requisitos estão atendidos:

```bash
#!/bin/bash

echo "=== Verificação de Requisitos do Agente Assessor ==="

# Verificar Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "✅ Node.js: $NODE_VERSION"
else
    echo "❌ Node.js não encontrado"
fi

# Verificar npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo "✅ npm: $NPM_VERSION"
else
    echo "❌ npm não encontrado"
fi

# Verificar Docker (se aplicável)
if command -v docker &> /dev/null; then
    DOCKER_VERSION=$(docker --version)
    echo "✅ Docker: $DOCKER_VERSION"
else
    echo "⚠️ Docker não encontrado (opcional)"
fi

# Verificar Docker Compose (se aplicável)
if command -v docker compose &> /dev/null; then
    COMPOSE_VERSION=$(docker compose version)
    echo "✅ Docker Compose: $COMPOSE_VERSION"
else
    echo "⚠️ Docker Compose não encontrado (opcional)"
fi

# Verificar Nginx (se aplicável)
if command -v nginx &> /dev/null; then
    NGINX_VERSION=$(nginx -v 2>&1)
    echo "✅ Nginx: $NGINX_VERSION"
else
    echo "⚠️ Nginx não encontrado (opcional)"
fi

echo "=== Verificação Concluída ==="
```

## ⏭️ Próximos Passos

Após verificar que todos os requisitos estão atendidos, escolha o método de instalação que melhor se adequa ao seu ambiente:

- **[Execução Local](local.md)**: Para desenvolvimento e testes rápidos
- **[Docker](docker.md)**: Para ambiente isolado e deploy fácil
- **[Serviços Diretos](services.md)**: Para instalação em produção

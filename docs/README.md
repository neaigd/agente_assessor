# Documentação do Agente Assessor

Esta pasta contém toda a documentação do projeto Agente Assessor, construída com [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## 🚀 Desenvolvimento Local

### Pré-requisitos

- Python 3.8+
- pip

### Instalação

```bash
# Instalar dependências
pip install -r requirements.txt

# Ou instalar individualmente
pip install mkdocs-material
pip install mkdocs-git-revision-date-localized-plugin
pip install mkdocs-minify-plugin
pip install mkdocs-redirects
```

### Executar Localmente

```bash
# Servidor de desenvolvimento
mkdocs serve

# Acessar em http://localhost:8000
```

### Build para Produção

```bash
# Gerar site estático
mkdocs build

# Arquivos gerados em ./site/
```

## 📁 Estrutura da Documentação

```
docs/
├── index.md                  # Página inicial
├── installation/             # Guias de instalação
│   ├── requirements.md
│   ├── local.md
│   ├── docker.md
│   └── services.md
├── user-guide/              # Manual do usuário
│   ├── getting-started.md
│   ├── interface.md
│   ├── analysis.md
│   └── documents.md
├── configuration/           # Configurações
│   ├── environment.md
│   ├── gemini.md
│   └── nginx.md
├── api/                     # Documentação da API
│   ├── reference.md
│   └── endpoints.md
├── development/             # Para desenvolvedores
│   ├── architecture.md
│   ├── structure.md
│   └── contributing.md
└── about/                   # Sobre o projeto
    ├── license.md
    ├── authors.md
    └── changelog.md
```

## 🎨 Personalizações

### Tema
- **Base**: Material Design
- **Cores**: Azul (primary) e azul (accent)
- **Modo**: Claro/Escuro com toggle
- **Idioma**: Português

### Plugins
- **search**: Busca em português
- **git-revision-date-localized**: Datas de modificação
- **minify**: Otimização dos arquivos
- **redirects**: Redirecionamentos

### Extensões Markdown
- **admonition**: Caixas de aviso
- **pymdownx.details**: Seções recolhíveis
- **pymdownx.superfences**: Code blocks avançados
- **pymdownx.highlight**: Syntax highlighting
- **pymdownx.tabbed**: Abas
- **attr_list**: Atributos HTML

## 🚀 Deploy Automático

A documentação é automaticamente implantada no GitHub Pages através do GitHub Actions quando:

1. **Push na branch main** com mudanças em:
   - `docs/**`
   - `mkdocs.yml`
   - `.github/workflows/docs.yml`

2. **Execução manual** do workflow

### Configuração no GitHub

1. Acesse **Settings** → **Pages**
2. Configure **Source**: GitHub Actions
3. O workflow `.github/workflows/docs.yml` cuidará do resto

## 📝 Contribuindo com a Documentação

### Adicionando Novas Páginas

1. Crie o arquivo `.md` na pasta apropriada
2. Adicione ao `nav` em `mkdocs.yml`
3. Use o formato estabelecido com emojis e seções

### Convenções

- **Emojis**: Use emojis descritivos nos títulos
- **Seções**: Organize com `##`, `###`
- **Links**: Use links relativos para navegação interna
- **Código**: Use syntax highlighting apropriado
- **Avisos**: Use admonitions para informações importantes

### Exemplo de Página

```markdown
# 🎯 Título da Página

Breve descrição da página.

## 📋 Seção Principal

Conteúdo da seção.

### Subseção

Mais detalhes.

!!! tip "Dica"
    Use admonitions para destacar informações importantes.

```bash
# Exemplo de código
comando --exemplo
```

## ⏭️ Próximos Passos

1. 📝 Completar páginas stub
2. 📸 Adicionar screenshots da interface
3. 🎥 Incluir vídeos demonstrativos
4. 🔍 Melhorar SEO e meta tags
5. 📊 Adicionar analytics

## 🐛 Problemas Conhecidos

- [ ] Algumas páginas ainda são stubs
- [ ] Faltam screenshots da interface
- [ ] Links para repositório precisam ser atualizados

## 📞 Suporte

Para questões sobre a documentação:
- 🐛 [Issues](https://github.com/username/agente_assessor/issues)
- 💬 [Discussions](https://github.com/username/agente_assessor/discussions)

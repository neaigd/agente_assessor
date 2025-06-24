# Estrutura do Projeto

Este documento descreve a estrutura de pastas e arquivos do projeto Agente Assessor para ajudar os desenvolvedores a navegar e entender a organização do código.

```
Directory of /media/peixoto/stuff/agente_assessor:
agente_assessor/
├── .env.local
├── .env.local.example
├── .git/
├── .github/
├── .gitignore
├── .venv/
├── App.tsx
├── Dockerfile
├── LICENSE
├── README.md
├── cleanup.bat
├── cleanup.sh
├── components/
│   ├── FileUpload.tsx
│   ├── TaskOutput.tsx
│   └── icons.tsx
├── constants.ts
├── docker-compose.yml
├── docs/
│   ├── README_docs.md
│   ├── about/
│   │   ├── authors.md
│   │   ├── changelog.md
│   │   └── license.md
│   ├── api/
│   │   ├── endpoints.md
│   │   └── reference.md
│   ├── configuration/
│   │   ├── environment.md
│   │   ├── gemini.md
│   │   └── nginx.md
│   ├── development/
│   │   ├── architecture.md
│   │   ├── contributing.md
│   │   └── structure.md
│   ├── index.md
│   ├── installation/
│   │   ├── docker.md
│   │   ├── local.md
│   │   ├── requirements.md
│   │   └── services.md
│   └── user-guide/
│       ├── analysis.md
│       ├── documents.md
│       ├── getting-started.md
│       └── interface.md
├── index.html
├── index.tsx
├── metadata.json
├── mkdocs.yml
├── nginx.conf
├── node_modules/
├── notes/
│   ├── .~lock.processo_analise.odt#
│   ├── Tarefa_1_Resumo_do_Processo.md
│   ├── Tarefa_2_Relatrio_do_Processo.md
│   ├── Tarefa_3_Anlise_do_Processo.md
│   ├── Tarefa_4_Elaborao_da_Sentena.md
│   ├── processo_analise.odt
│   ├── processo_analise.pdf
│   └── teste.md
├── package-lock.json
├── package.json
├── requirements.txt
├── server.js
├── services/
│   └── geminiService.ts
├── site/
│   ├── 404.html
│   ├── about/
│   │   ├── authors/
│   │   │   └── index.html
│   │   ├── changelog/
│   │   │   └── index.html
│   │   └── license/
│   │       └── index.html
│   ├── api/
│   │   ├── endpoints/
│   │   │   └── index.html
│   │   ├── reference/
│   │   │   └── index.html
│   │   └── index.html
│   ├── assets/
│   │   ├── images/
│   │   │   └── favicon.png
│   │   ├── javascripts/
│   │   │   ├── bundle.13a4f30d.min.js
│   │   │   ├── bundle.13a4f30d.min.js.map
│   │   │   ├── lunr/
│   │   │   │   ├── min/
│   │   │   │   │   ├── lunr.ar.min.js
│   │   │   │   │   ├── lunr.da.min.js
│   │   │   │   │   ├── lunr.de.min.js
│   │   │   │   │   ├── lunr.du.min.js
│   │   │   │   │   ├── lunr.el.min.js
│   │   │   ��   │   ├── lunr.es.min.js
│   │   │   │   │   ├── lunr.fi.min.js
│   │   │   │   │   ├── lunr.fr.min.js
│   │   │   │   │   ├── lunr.he.min.js
│   │   │   │   │   ├── lunr.hi.min.js
│   │   │   │   │   ├── lunr.hu.min.js
│   │   │   │   │   ├── lunr.hy.min.js
│   │   │   │   │   ├── lunr.it.min.js
│   │   │   │   │   ├── lunr.ja.min.js
│   │   │   │   │   ├── lunr.jp.min.js
│   │   │   │   │   ├── lunr.kn.min.js
│   │   │   │   │   ├── lunr.ko.min.js
│   │   │   │   │   ├── lunr.multi.min.js
│   │   │   │   │   ├── lunr.nl.min.js
│   │   │   │   │   ├── lunr.no.min.js
│   │   │   │   │   ├── lunr.pt.min.js
│   │   │   │   │   ├── lunr.ro.min.js
│   │   │   │   │   ├── lunr.ru.min.js
│   │   │   │   │   ├── lunr.sa.min.js
│   │   │   │   │   ├── lunr.stemmer.support.min.js
│   │   │   │   │   ├── lunr.sv.min.js
│   │   ��   │   │   ├── lunr.ta.min.js
│   │   │   │   │   ├── lunr.te.min.js
│   │   │   │   │   ├── lunr.th.min.js
│   │   │   │   │   ├── lunr.tr.min.js
│   │   │   │   │   ├── lunr.vi.min.js
│   │   │   │   │   └── lunr.zh.min.js
│   │   │   │   ├── tinyseg.js
│   │   │   │   └── wordcut.js
│   │   │   └── workers/
│   │   │       ├── search.d50fe291.min.js
│   │   │       └── search.d50fe291.min.js.map
│   │   └── stylesheets/
│   │       ├── main.342714a4.min.css
│   │       ├── main.342714a4.min.css.map
│   │       ├── palette.06af60db.min.css
│   │       └── palette.06af60db.min.css.map
│   ├── configuration/
│   │   ├── environment/
│   │   │   └── index.html
│   │   ├── gemini/
│   │   │   └── index.html
│   │   └── nginx/
│   │       └── index.html
│   ├── development/
│   │   ├── architecture/
│   │   │   └── index.html
│   │   ├── contributing/
│   │   │   └── index.html
│   │   └── structure/
│   │       └── index.html
│   ├── index.html
│   ├── installation/
│   │   ├── docker/
│   │   │   └── index.html
│   │   ├── local/
│   │   │   └── index.html
│   │   ├── requirements/
│   │   │   └── index.html
│   │   └── services/
│   │       └── index.html
│   ├── search/
│   │   └── search_index.json
│   ├── sitemap.xml
│   ├── sitemap.xml.gz
│   └── user-guide/
│       ├── analysis/
│       │   └── index.html
│       ├── documents/
│       │   └── index.html
│       ├── getting-started/
│       │   └── index.html
│       └── interface/
│           └── index.html
├── start.ps1
├── start.sh
├── start_services.bat
├── start_services.sh
├── tsconfig.json
├── types.ts
└── vite.config.ts
```

## Descrição das Pastas e Arquivos

- **`.env.local`**: Arquivo para variáveis de ambiente locais. Não incluído no controle de versão.
- **`.env.local.example`**: Exemplo do arquivo `.env.local`.
- **`.git/`**: Metadados do repositório Git.
- **`.github/`**: Configurações para GitHub Actions e outras integrações do GitHub.
- **`.gitignore`**: Especifica arquivos e pastas a serem ignorados pelo Git.
- **`.venv/`**: Ambiente virtual Python (se utilizado).
- **`App.tsx`**: Componente principal da aplicação frontend (React).
- **`Dockerfile`**: Define a imagem Docker para a aplicação.
- **`LICENSE`**: O arquivo de licença do projeto (Licença MIT).
- **`README.md`**: O arquivo README principal do projeto.
- **`cleanup.bat` / `cleanup.sh`**: Scripts para limpar o ambiente Docker no Windows e Linux/macOS, respectivamente.
- **`components/`**: Contém componentes reutilizáveis do frontend (React).
    - **`FileUpload.tsx`**: Componente para upload de arquivos.
    - **`TaskOutput.tsx`**: Componente para exibir a saída das tarefas/análises.
    - **`icons.tsx`**: Componente para ícones.
- **`constants.ts`**: Arquivo para constantes globais do projeto.
- **`docker-compose.yml`**: Define os serviços para execução com Docker Compose (frontend, backend, nginx).
- **`docs/`**: Contém toda a documentação do projeto, gerada pelo MkDocs.
    - **`README_docs.md`**: README específico para a documentação.
    - **`about/`**: Documentação sobre o projeto (autores, changelog, licença).
    - **`api/`**: Documentação da API.
    - **`configuration/`**: Documentação sobre configuração (ambiente, Gemini, Nginx).
    - **`development/`**: Documentação para desenvolvedores (arquitetura, contribuição, estrutura).
    - **`index.md`**: Página inicial da documentação.
    - **`installation/`**: Guias de instalação (Docker, local, requisitos, serviços).
    - **`user-guide/`**: Manual do usuário (análise, documentos, primeiros passos, interface).
- **`index.html`**: Arquivo HTML principal do frontend.
- **`index.tsx`**: Ponto de entrada da aplicação frontend (React).
- **`metadata.json`**: Arquivo de metadados do projeto (?).
- **`mkdocs.yml`**: Arquivo de configuração do MkDocs para gerar a documentação.
- **`nginx.conf`**: Arquivo de configuração do Nginx.
- **`node_modules/`**: Dependências do Node.js instaladas.
- **`notes/`**: Pasta contendo notas e arquivos de exemplo de análise.
- **`package-lock.json` / `package.json`**: Arquivos de configuração do npm.
- **`requirements.txt`**: Dependências Python (se utilizado backend Python ou scripts).
- **`server.js`**: Arquivo principal do servidor backend (Node.js).
- **`services/`**: Contém serviços ou módulos do backend.
    - **`geminiService.ts`**: Módulo para interagir com a API do Google Gemini.
- **`site/`**: Diretório de saída gerado pelo MkDocs ao construir a documentação.
- **`start.ps1` / `start.sh`**: Scripts para iniciar a aplicação com Docker no Windows e Linux/macOS, respectivamente.
- **`start_services.bat` / `start_services.sh`**: Scripts para iniciar os serviços Node.js e Nginx diretamente no Windows e Linux/macOS, respectivamente.
- **`tsconfig.json`**: Arquivo de configuração do TypeScript.
- **`types.ts`**: Definições de tipos TypeScript.
- **`vite.config.ts`**: Arquivo de configuração do Vite (bundler para o frontend).

Esta descrição cobre os principais arquivos e diretórios do projeto. Para detalhes mais específicos sobre o código, consulte os arquivos individualmente.

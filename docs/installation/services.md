# Execução dos Serviços Diretamente

Este documento detalha como iniciar e gerenciar os serviços de backend (Node.js e Nginx) do Agente Assessor diretamente em sua máquina host, sem utilizar Docker. Este método requer que Node.js e Nginx estejam instalados e configurados em seu sistema.

## Pré-requisitos

-   [Node.js](https://nodejs.org/) 20.x ou superior instalado.
-   [Nginx](http://nginx.org/) instalado e configurado.
-   Chave de API do Google Gemini configurada como variável de ambiente (`GEMINI_API_KEY`). Consulte [Configuração do Google Gemini](../configuration/gemini.md).

## Configuração do Nginx

Certifique-se de que seu servidor Nginx esteja configurado para incluir o arquivo `nginx.conf` localizado na raiz do repositório do projeto. Este arquivo contém as configurações necessárias para direcionar o tráfego para o servidor Node.js.

A forma de incluir este arquivo varia dependendo da sua instalação do Nginx. Uma abordagem comum é copiar o `nginx.conf` para o diretório `conf.d` do Nginx (por exemplo, `/etc/nginx/conf.d/agente_assessor.conf`) e garantir que o arquivo de configuração principal do Nginx (`nginx.conf`) inclua arquivos desse diretório.

Após configurar o Nginx, recarregue ou reinicie o serviço Nginx para aplicar as mudanças.

## Iniciando os Serviços

O projeto inclui scripts para iniciar os serviços Node.js e Nginx em segundo plano.

### Linux e macOS

Utilize o script `start_services.sh`.

1.  Torne o script executável:
    ```bash
    chmod +x start_services.sh
    ```
2.  Execute o script:
    ```bash
    ./start_services.sh
    ```

Este script iniciará o servidor Node.js e o Nginx. Você pode verificar se os processos estão rodando em segundo plano.

### Windows

Utilize o script `start_services.bat`.

1.  Abra o Prompt de Comando ou PowerShell na raiz do projeto.
2.  Execute o script:
    ```cmd
    start_services.bat
    ```

Este script iniciará o servidor Node.js e o Nginx em janelas separadas do console.

## Verificando os Serviços

Após iniciar os serviços, você pode verificar se estão funcionando corretamente acessando a aplicação através do endereço configurado no Nginx (geralmente `http://localhost` ou a porta que você configurou).

Você também pode verificar os logs de cada serviço para identificar possíveis erros durante a inicialização.

## Parando os Serviços

Para parar os serviços iniciados com esses scripts, você precisará identificar os processos Node.js e Nginx e encerrá-los manualmente utilizando os comandos apropriados do seu sistema operacional (por exemplo, `pkill node` e `pkill nginx` no Linux/macOS, ou através do Gerenciador de Tarefas no Windows).


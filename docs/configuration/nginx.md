# Configuração do Nginx

O Nginx é utilizado no Agente Assessor para servir a aplicação web e atuar como um reverse proxy, direcionando as requisições para o backend. Este guia aborda a configuração necessária do Nginx ao executar os serviços diretamente.

## Requisitos

- Nginx instalado e configurado em seu sistema operacional.

## Arquivo de Configuração

O arquivo de configuração do Nginx relevante para este projeto é o `nginx.conf`, localizado na raiz do repositório. Este arquivo contém a configuração para direcionar o tráfego para o servidor Node.js.

## Configuração ao Executar Serviços Diretamente

Ao executar os serviços diretamente (utilizando `start_services.sh` ou `start_services.bat`), você precisa garantir que o Nginx esteja configurado para incluir ou carregar o arquivo `nginx.conf` do projeto. A forma exata de fazer isso depende da instalação do Nginx em seu sistema.

Normalmente, você pode:

1.  Copiar o arquivo `nginx.conf` para o diretório de configurações do Nginx (por exemplo, `/etc/nginx/conf.d/` no Linux).
2.  Incluir o arquivo `nginx.conf` no arquivo de configuração principal do Nginx (`nginx.conf`) usando a diretiva `include`.

Certifique-se de que o Nginx esteja rodando e que a configuração esteja ativa.

## Configuração com Docker

Ao utilizar o Docker Compose (`docker-compose.yml`), a configuração do Nginx já está incluída no serviço `nginx`. O arquivo `nginx.conf` do projeto é copiado para dentro do contêiner Nginx, e o Nginx é configurado para utilizá-lo automaticamente. Nenhuma configuração manual do Nginx é necessária neste caso.


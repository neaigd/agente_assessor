# Como Contribuir

Agradecemos seu interesse em contribuir para o Agente Assessor! Contribuições de qualquer tipo são bem-vindas e ajudam a melhorar o projeto para todos.

## Como Posso Contribuir?

Existem várias formas de contribuir para o projeto, incluindo:

-   **Reportar Bugs:** Se você encontrar um bug, por favor, abra uma issue detalhando o problema, os passos para reproduzi-lo e as informações do seu ambiente.
-   **Sugerir Funcionalidades:** Novas ideias são sempre bem-vindas! Abra uma issue descrevendo a funcionalidade que você gostaria de ver implementada e por que ela seria útil.
-   **Enviar Pull Requests:** Se você é desenvolvedor e gostaria de contribuir com código, siga os passos abaixo para enviar um Pull Request.
-   **Melhorar a Documentação:** A documentação é fundamental! Se você encontrar erros, informações desatualizadas ou tiver ideias para melhorar a clareza, sinta-se à vontade para sugerir edições.

## Enviando um Pull Request

Para contribuir com código, siga estes passos:

1.  **Faça um Fork** do repositório do Agente Assessor para sua conta do GitHub.
2.  **Clone o Fork** para sua máquina local:
    ```bash
    git clone https://github.com/seu-usuario/agente_assessor.git
    ```
3.  **Crie uma Nova Branch** para a sua contribuição:
    ```bash
    git checkout -b minha-contribuicao
    ```
    Escolha um nome descritivo para a branch (por exemplo, `feat/nova-funcionalidade` ou `fix/correcao-bug`).
4.  **Implemente sua Contribuição:** Faça as alterações necessárias no código ou na documentação.
5.  **Commit suas Alterações:** Escreva mensagens de commit claras e concisas que descrevam o que você fez.
    ```bash
    git commit -m "feat: adiciona nova funcionalidade de exportacao"
    ```
6.  **Envie suas Alterações** para o seu Fork no GitHub:
    ```bash
    git push origin minha-contribuicao
    ```
7.  **Abra um Pull Request:** Vá para a página do repositório original no GitHub e você verá um botão para abrir um novo Pull Request a partir da sua branch. Forneça uma descrição detalhada das suas alterações.

## Padrões de Código

- Mantenha a consistência com o estilo de código existente no projeto.
- Escreva testes para o código que você adicionar ou modificar (se aplicável).
- Certifique-se de que o build do projeto (`npm run build` ou equivalente) está passando antes de enviar o Pull Request.

## Licença

Ao contribuir para este projeto, você concorda que suas contribuições serão licenciadas sob a Licença MIT, conforme descrito no arquivo [LICENSE](../about/license.md).


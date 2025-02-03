# class-to-web

> Note: Documento ainda em formatação.

Ideia ambiciosa de aplicação que gera sites ou blogs a partir de anotações em papel.

O usuário fará upload de suas anotações em PDF, JPG ou PNG. Estes arquívos passarão por uma aplicação de OCR para extração do texto, que será formatado em um repositório github atrvéz do github API.

Utilizando Jekyll, a aplicação irá montar um website simples que será hospedado no github.io do usuário.

## Docs

No diretório [doc](/doc/) você encontra todos os documentos elaborados durante o desenvolvimento desta aplicação.

- O subdiretório [adr](/doc/adr/) contém notas de decisões tomadas sobre a construção da aplicação. Confira [architecture-decision-record](https://github.com/joelparkerhenderson/architecture-decision-record).

- O subdiretório [logs](/doc/logs/) contém notas de trabalho diárias, onde informo o que estou fazendo para me manter organizado.

- O subdiretório [excalidraw](/doc/excalidraw/) contém desenhos de arquitetura, que tendem a ir evoluindo durante o desenvolvimento.
  - __obs__: Os desenhos foram feitos utilizando a extensão [Excalidraw para VSCode](https://marketplace.visualstudio.com/items?itemName=pomdtr.excalidraw-editor). Não será possível conferi-los sem utilizar o excalidraw.

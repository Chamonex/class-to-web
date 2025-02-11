# Site Web

## Status

Work in Progress

## Context

A primeira parte do projeto é fazer um web site em que o usuário possa fazer upload de texto.

Preciso decidir quais tecnologias utilizar nesse site para:

- Construir frontend
- Upload de arquivo

Opções para construir o front-end:

### HTML + JavaScript (Vanilla)

- Input vanila
- API FileReader para pré-visualização de arquivos no cliente
- FormData para enviar arquivos via fetch()

### Frameworks Frontend

- Angular: ngx-file-drop, HttpClient com FormData
- React: Bibliotecas como react-dropzone
- Vue: Uso nativo com v-model ou bibliotecas como vue-upload-component

### Componentes de Upload Prontos

- Dropzone.js (Drag & Drop)
- FineUploader (Mais personalizável)

**Primeira Versão:**
Apenas uma tela com a opção de upload.

## Decision

Estarei testando o site utilizando **Angular** para fazer o frontend.

## Consequences

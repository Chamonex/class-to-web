# ADR 0001: Pensando nos componentes

## Status

Work in Progress

## Context

Tenho a ideia da aplicação, e quero organizar os componentes para começar a pensar na arquitetura de cada um.

## Decision

Inicialmente, penso nos seguintes componentes para a aplicação:

1. Site WEB para os usuários fazerem o upload dos arquivos pdf, png ou jpeg.
    - Os arquivos devem ir para algum lugar dentre as opções:
        1. Cloud Storage (inicialmente pensando no Google Filestore API)
        2. Banco de Dados
        3. Servidor

2. Aplicação de servidor que importe os arquivos enviados e envie para uma aplicação ORC para extrair o texto dos arquivos.
   - ORC: Inicialmente pensando no [Google Cloud Vision API](https://cloud.google.com/vision/docs?hl=pt-br)

## Consequences

## Alternatives Considered

## References

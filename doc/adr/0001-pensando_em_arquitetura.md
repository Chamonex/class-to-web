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
Describe the consequences of the decision. This includes both positive and negative effects, as well as any potential risks or trade-offs.

## Alternatives Considered
List any alternative solutions that were considered and explain why they were not chosen.

## References
Include any references or links to relevant documents, discussions, or other resources.
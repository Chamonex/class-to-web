# ADR 0001: Pensando nos componentes

## Status

Work in Progress

## Context

Tenho a ideia da aplicação, e quero organizar os componentes para começar a pensar na arquitetura de cada um.

## Decision

Inicialmente, penso nos seguintes componentes para a aplicação:

1. Site WEB para os usuários fazerem o upload dos arquivos txt / markdown.
    - Os arquivos devem ir para algum lugar dentre as opções:
        1. Cloud Storage (inicialmente pensando no Google Filestore API)
        2. Banco de Dados
        3. Servidor

2. Aplicação de servidor que gera um website com o conteúdo enviado.

## Consequences

## Alternatives Considered

## References

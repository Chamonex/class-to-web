# ADR 0004: Backend

## Status

Stopped

## Context

### Backend

O backend deve processar e armazenar os arquivos. Algumas opções:

- Node.js com Express + Multer

Biblioteca multer para processar uploads
Pode salvar localmente ou enviar para um armazenamento externo (AWS S3, Google Cloud Storage)

- Django (Python)

django.core.files.storage para salvar arquivos
django-rest-framework para API de upload

- Flask (Python)

Flask-Uploads ou Flask-WTF

- Java (Spring Boot)

MultipartFile para manipular arquivos
Pode armazenar localmente ou em um bucket de cloud

- PHP (Laravel)
Storage::put() para salvar em disco ou cloud

### Armazenamento

Se o upload for grande ou precisar de escalabilidade, considere serviços como:

AWS S3
Google Cloud Storage
Azure Blob Storage
Firebase Storage (para projetos menores)

## Decision

## Consequences

## Alternatives Considered

# Fluxo Técnico — Agenda Monica Hair

## Projeto

Vitrine Inteligente — Case #001

## Cliente

Monica Hair

## Data

05/09/2026

## Documentos de origem

- `docs/01-baseline.md`
- `docs/05-as-is-agenda.md`
- `docs/06-requisitos-agenda.md`
- `docs/07-to-be-arquitetura.md`
- `docs/04-event-taxonomy.md`

---

# 1. Objetivo

Documentar o fluxo técnico necessário para evolução do
processo de agendamento da Monica Hair.

Este documento transforma a arquitetura TO-BE em um fluxo
operacional implementável.

O objetivo é definir:

- entradas;
- processamento;
- validações;
- regras de decisão;
- persistência;
- atualização de estado;
- confirmação;
- tratamento de falhas;
- eventos;
- evidências.

A implementação somente deverá ocorrer após a validação
deste fluxo.

---

# 2. Princípio de implementação

A implementação deverá seguir a sequência:

Requisição
↓
Validação
↓
Disponibilidade
↓
Conflito
↓
Registro
↓
Atualização de estado
↓
Confirmação
↓
Evento
↓
Evidência

Nenhuma etapa deverá confirmar um agendamento antes de
as validações necessárias serem concluídas.

---

# 3. Atores

## 3.1 Cliente

Responsável por iniciar a solicitação de agendamento.

## 3.2 Landing Page

Responsável pela coleta inicial dos dados.

## 3.3 Camada de orquestração

Responsável por coordenar o processamento da solicitação.

## 3.4 Agenda operacional

Responsável pelo armazenamento dos dados necessários
ao controle da agenda.

## 3.5 Monica Hair

Responsável pela operação e validação do agendamento.

## 3.6 Serviços externos

Podem participar da evolução do fluxo, incluindo:

- Google Sheets;
- Google Calendar;
- canal de comunicação.

---

# 4. Entrada da solicitação

A solicitação deverá conter, no mínimo:

| Campo | Obrigatório | Descrição |
|---|---|---|
| nome | Sim | Nome do cliente |
| telefone | Sim | Telefone para contato |
| data | Sim | Data desejada |
| horário | Sim | Horário desejado |
| serviço | Sim | Serviço solicitado |

A estrutura definitiva do contrato deverá ser formalizada
em documento específico antes da implementação.

---

# 5. Fluxo principal

## FLUXO-001 — Solicitação de agendamento

```text
Cliente
   ↓
Landing Page
   ↓
Preenchimento dos dados
   ↓
Envio da solicitação
   ↓
Orquestração
   ↓
Validação
   ↓
Consulta da disponibilidade
   ↓
Verificação de conflito
   ↓
Registro
   ↓
Atualização do estado
   ↓
Confirmação
   ↓
Registro do evento

# Contrato Técnico — Agendamento Monica Hair

## Projeto

Vitrine Inteligente — Case #001

## Cliente

Monica Hair

## Data

06/09/2026

## Documentos de referência

- `docs/05-as-is-agenda.md`
- `docs/06-requisitos-agenda.md`
- `docs/07-to-be-arquitetura.md`
- `docs/08-fluxo-tecnico.md`
- `docs/04-event-taxonomy.md`

---

# 1. Objetivo

Definir o contrato técnico da solicitação de agendamento da Monica Hair.

Este documento estabelece a estrutura mínima dos dados, regras de validação, estados, respostas, eventos e tratamento de erros necessários para implementar o fluxo definido na arquitetura TO-BE.

O contrato representa a fronteira entre a interface de solicitação e a camada responsável pelo processamento do agendamento.

---

# 2. Operação

## AGENDAMENTO-001

Solicitação de agendamento de atendimento.

### Origem

Landing Page Monica Hair.

### Objetivo

Receber uma solicitação de atendimento, validar os dados informados, verificar a disponibilidade do horário e registrar a solicitação para posterior confirmação.

---

# 3. Request

A solicitação deverá conter os seguintes campos:

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---:|---|
| nome | string | Sim | Nome do cliente |
| telefone | string | Sim | Telefone para contato |
| data | date | Sim | Data desejada |
| horario | time | Sim | Horário desejado |
| servico | string | Sim | Serviço solicitado |
| origem | string | Sim | Origem da solicitação |

---

# 4. Exemplo de payload

```json
{
  "nome": "Cliente Exemplo",
  "telefone": "5511999999999",
  "data": "2026-09-10",
  "horario": "14:00",
  "servico": "Corte",
  "origem": "Landing Page Monica Hair"
}
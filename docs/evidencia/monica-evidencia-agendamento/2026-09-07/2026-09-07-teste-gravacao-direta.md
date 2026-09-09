# Evidência — Teste de Gravação Direta do Agendamento

## Identificação

- **Projeto:** Hair by Monica — Appointment Management System
- **Componente:** Google Apps Script → Google Sheets
- **Data do teste:** 07/09/2026
- **Teste:** `testeGravacaoDireta()`
- **Objetivo:** validar a capacidade do backend de gravar um registro na aba `Agendamentos` da planilha operacional.

## Pré-condições

- Projeto correto do Google Apps Script: `API Agendamento Monica Hair`.
- Aba de destino: `Agendamentos`.
- Cabeçalho validado com 10 colunas:

```text
id | criado_em | nome | telefone | data | hora | procedimento | status | origem | observacoes
```

## Execução

A função `testeGravacaoDireta()` foi executada pelo editor do Google Apps Script.

Resultado registrado no painel de execução:

```text
Informação: Teste de gravação direta executado com sucesso.
```

## Resultado observado

A aba `Agendamentos` recebeu uma nova linha com os seguintes dados de teste:

| Campo | Resultado |
|---|---|
| `id` | UUID gerado pelo Apps Script |
| `criado_em` | Data/hora da execução |
| `nome` | `TESTE ANA` |
| `telefone` | `11999999999` |
| `data` | `2026-09-08` |
| `hora` | `14:00` |
| `procedimento` | `Escova simples` |
| `status` | `NOVO` |
| `origem` | `Teste Apps Script` |
| `observacoes` | vazio |

## Critério de aceite

**APROVADO** — o backend conseguiu acessar a planilha configurada, localizar a aba `Agendamentos` e persistir um registro respeitando a estrutura definida.

## Escopo comprovado

Este teste comprova somente:

```text
Google Apps Script
        ↓
SpreadsheetApp.openById()
        ↓
Aba Agendamentos
        ↓
appendRow()
        ↓
Registro persistido
```

Ainda não comprova:

- processamento real via `doPost()`;
- consulta da disponibilidade na aba `Horários`;
- prevenção de duplicidade;
- deployment da Web App;
- comunicação entre Landing Page e Apps Script;
- resolução do problema de CORS.

## Evidência visual

![Evidência da gravação direta](2026-09-07-teste-gravacao-direta.png)

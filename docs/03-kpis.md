# Monica Hair — KPIs v1.0

## Projeto

**Vitrine Inteligente — Case #001**

## Data

04/09/2026

---

# 1. Objetivo

Definir os indicadores utilizados para medir o desempenho do
funil de aquisição e conversão da Monica Hair.

Os KPIs devem permitir:

- medir o comportamento das visitantes;
- identificar gargalos do funil;
- avaliar experimentos de CRO;
- relacionar ações digitais a resultados comerciais;
- gerar aprendizado reutilizável para a Vitrine Inteligente.

---

# 2. Princípio de Medição

A Vitrine Inteligente não considera um clique isolado como
resultado final.

A avaliação deve acompanhar a evolução:

**Atenção → Interesse → Intenção → Conversa → Agendamento → Comparecimento → Venda → Retorno → Indicação**

O objetivo final é melhorar o resultado do negócio, e não apenas
aumentar métricas intermediárias.

---

# 3. Hierarquia dos KPIs

## Nível 1 — KPI de Negócio

Indicadores que representam o resultado efetivo para a Monica Hair.

### KPI principal

**Agendamentos confirmados**

Representa a quantidade de solicitações que foram efetivamente
confirmadas pela Monica Hair.

### KPI operacional

**Comparecimentos**

Representa a quantidade de clientes que efetivamente compareceram
ao horário confirmado.

### KPI financeiro

**Receita**

Representa o valor gerado pelos atendimentos.

### KPI de retenção

**Taxa de retorno**

Representa a proporção de clientes que retornam após o primeiro
atendimento.

---

# 4. KPIs de Conversão

## 4.1 Taxa de clique no WhatsApp

### Objetivo

Medir a capacidade da landing page de gerar intenção de contato.

### Fórmula

**Cliques no WhatsApp ÷ visitas à landing page × 100**

### Evento

`cta_whatsapp_click`

### Prioridade

**P0**

---

## 4.2 Taxa de conversão em lead

### Objetivo

Medir a capacidade da página de transformar visitantes em contatos.

### Fórmula

**Leads ÷ visitas × 100**

### Evento

`lead_created`

### Prioridade

**P0**

---

## 4.3 Taxa de conversão em agendamento

### Objetivo

Medir a capacidade de transformar leads em agendamentos confirmados.

### Fórmula

**Agendamentos confirmados ÷ leads × 100**

### Evento

`appointment_confirmed`

### Prioridade

**P0**

---

## 4.4 Taxa de comparecimento

### Objetivo

Medir a proporção de agendamentos que resultam em atendimento realizado.

### Fórmula

**Comparecimentos ÷ agendamentos confirmados × 100**

### Evento

`appointment_attended`

### Prioridade

**P1**

---

# 5. KPIs de Comportamento

## 5.1 Visitas à landing page

### Objetivo

Medir o volume de tráfego recebido.

### Evento

`page_view`

### Prioridade

**P0**

---

## 5.2 Cliques nos CTAs

### Objetivo

Identificar quais pontos da página geram maior intenção de ação.

### Eventos

```text
cta_whatsapp_click
hero_whatsapp_click
final_whatsapp_click
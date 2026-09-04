# Monica Hair — Taxonomia de Eventos v1.0

## Projeto

**Vitrine Inteligente — Case #001**

## Data

04/09/2026

---

# 1. Objetivo

Definir uma taxonomia padronizada para os eventos de comportamento
e conversão da landing page da Monica Hair.

A taxonomia deverá permitir identificar:

- o que a visitante fez;
- onde a ação ocorreu;
- qual CTA foi utilizado;
- qual etapa do funil foi alcançada;
- qual foi a origem do tráfego;
- qual campanha gerou a interação;
- qual serviço estava relacionado à intenção.

O objetivo é criar uma base de dados consistente para análise de CRO,
experimentos e evolução do funil comercial.

---

# 2. Princípio

Cada evento deve representar uma ação observável da visitante ou uma
mudança relevante de estado no funil.

A instrumentação deve evitar eventos desnecessários e priorizar
informações úteis para tomada de decisão.

A regra é:

**Evento → Contexto → Funil → KPI → Decisão**

---

# 3. Convenção de Nomenclatura

Os eventos utilizarão:

- letras minúsculas;
- palavras separadas por underscore;
- nomes descritivos;
- verbos ou ações observáveis;
- nomenclatura consistente.

Exemplo:

```text
whatsapp_click
booking_start
booking_submit
booking_success
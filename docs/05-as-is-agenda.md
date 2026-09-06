# AS-IS — Processo de Agendamento

## Projeto

Vitrine Inteligente — Case #001

## Cliente

Monica Hair

## Data da análise

05/09/2026

## Fonte principal

Google Sheets — MONICA HAIR — LINHA DE BASE 0 — 05-09-2026

## Evidência relacionada

E-001 — Baseline Operacional da Agenda

---

# 1. Objetivo

Documentar o processo atual de controle de agendamento da Monica
Hair antes da implementação de alterações de engenharia.

O objetivo desta análise é identificar a estrutura existente,
os dados utilizados, as etapas observáveis, as possíveis
intervenções manuais, as regras conhecidas e os gaps que deverão
ser investigados antes da definição da solução futura.

---

# 2. Escopo

Esta análise considera a estrutura observada na planilha utilizada
como referência do Baseline Operacional da Agenda.

O escopo contempla:

- estrutura das abas;
- campos existentes;
- controle de data;
- controle de horário;
- disponibilidade;
- identificação do cliente;
- telefone;
- confirmação;
- informações observáveis sobre o processo.

Não fazem parte desta análise, neste momento, funcionalidades
que não estejam comprovadas pela evidência disponível.

---

# 3. Estrutura observada

## 3.1 Aba Serviços

A aba apresenta os campos:

- Nome
- Serviço
- Horário
- Data

Na captura do baseline não foram observados registros
operacionais preenchidos abaixo dos cabeçalhos.

## 3.2 Aba Horários

A aba apresenta os campos:

- Data
- Horário
- Disponível
- CLIENTE
- TELEFONE
- CONFIRMADO

Na captura do baseline foram observados horários entre 09h00
e 17h00 para 05/09/2026.

Os horários observados estavam marcados como disponíveis.

## 3.3 Aba Página2

Aba existente na planilha.

Não foram observados dados operacionais na captura utilizada
como evidência.

---

# 4. Dados observados

| Campo | Observação |
|---|---|
| Data | Identifica a data associada ao horário |
| Horário | Identifica o slot de atendimento |
| Disponível | Indica a disponibilidade registrada |
| CLIENTE | Campo destinado à identificação do cliente |
| TELEFONE | Campo destinado ao telefone do cliente |
| CONFIRMADO | Campo destinado ao registro de confirmação |

As descrições acima representam a interpretação funcional
direta dos nomes dos campos e da estrutura observada.

---

# 5. Processo AS-IS

Com base na estrutura disponível, o processo pode ser representado
inicialmente da seguinte forma:

Cliente
↓
Solicitação de atendimento
↓
Consulta de disponibilidade
↓
Seleção de data e horário
↓
Registro na agenda
↓
Identificação do cliente
↓
Registro do telefone
↓
Registro de confirmação
↓
Atendimento

Este fluxo representa um modelo inicial de processo e deverá ser
validado antes de ser considerado como descrição definitiva da
operação.

---

# 6. Intervenções e dependências

A estrutura da planilha evidencia a necessidade de registrar
informações relacionadas ao agendamento.

Entretanto, a evidência disponível não permite determinar com
segurança quais etapas são executadas manualmente, quais são
automatizadas ou quem executa cada atividade.

Portanto, as seguintes informações permanecem como pontos de
investigação:

- como o horário é disponibilizado;
- como a disponibilidade é atualizada;
- como o cliente é registrado;
- como o telefone é registrado;
- como a confirmação é realizada;
- quem altera o campo CONFIRMADO;
- se existe comunicação automática com o cliente;
- se existe integração com calendário;
- se existe sincronização com WhatsApp.

---

# 7. Regras observadas

## Regra R-001 — Disponibilidade

A estrutura da agenda possui um campo denominado `Disponível`,
utilizado para registrar a disponibilidade do horário.

## Regra R-002 — Horários

A estrutura observada contém slots horários entre 09h00 e 17h00
na data registrada no baseline.

## Regra R-003 — Confirmação

A agenda possui um campo denominado `CONFIRMADO`.

A evidência disponível não permite determinar, neste momento,
qual evento ou procedimento altera esse campo.

## Regra R-004 — Destaque visual

O horário de 12h00 apresenta destaque visual diferente dos
demais horários na captura.

A causa e o significado operacional desse destaque ainda não
foram determinados.

Nenhuma regra de negócio será inferida sem validação adicional.

---

# 8. O que está evidenciado

São evidenciados pela planilha:

- existência da estrutura de agenda;
- existência de datas;
- existência de horários;
- existência do controle de disponibilidade;
- existência dos campos de cliente;
- existência do campo de telefone;
- existência do campo de confirmação;
- existência das abas Serviços, Horários e Página2.

---

# 9. O que não está evidenciado

A planilha, isoladamente, não comprova:

- automação de agendamento;
- envio automático de WhatsApp;
- integração com Google Calendar;
- confirmação automática;
- lembretes automáticos;
- sincronização entre sistemas;
- métricas de conversão;
- regras completas de disponibilidade;
- regras de duração dos serviços;
- regras para conflitos de horários.

Esses itens deverão ser investigados antes de serem incorporados
à arquitetura futura.

---

# 10. Gaps identificados

## GAP-001 — Estrutura de serviços

A aba `Serviços` possui estrutura de campos, mas não apresenta
dados operacionais preenchidos na captura do baseline.

## GAP-002 — Regras de disponibilidade

A estrutura registra disponibilidade, porém as regras responsáveis
pela alteração desse estado ainda não estão documentadas.

## GAP-003 — Processo de confirmação

Existe o campo `CONFIRMADO`, porém o processo responsável pela
confirmação ainda não está evidenciado.

## GAP-004 — Integrações

Não há evidência suficiente, nesta fonte, para confirmar integração
com WhatsApp, calendário ou outros sistemas.

## GAP-005 — Mensuração

Não há evidência de métricas de conversão ou acompanhamento
quantitativo do processo de agendamento na estrutura analisada.

## GAP-006 — Regras operacionais

Existem elementos visuais cujo significado operacional ainda
precisa ser validado, como o destaque observado no horário de 12h00.

---

# 11. Hipóteses a validar

As seguintes hipóteses não devem ser tratadas como fatos:

- a disponibilidade pode ser atualizada manualmente;
- o campo `CONFIRMADO` pode representar uma etapa manual;
- o telefone pode ser utilizado para comunicação direta com o cliente;
- a agenda pode depender de consulta manual de disponibilidade.

Essas hipóteses deverão ser validadas antes da definição da
arquitetura TO-BE.

---

# 12. Matriz AS-IS

| ID | Elemento | Estado observado | Evidência | Status |
|---|---|---|---|---|
| ASIS-001 | Agenda | Estrutura em Google Sheets | E-001 | Evidenciado |
| ASIS-002 | Data | Campo existente | E-001 | Evidenciado |
| ASIS-003 | Horário | Slots registrados | E-001 | Evidenciado |
| ASIS-004 | Disponibilidade | Campo existente | E-001 | Evidenciado |
| ASIS-005 | Cliente | Campo existente | E-001 | Evidenciado |
| ASIS-006 | Telefone | Campo existente | E-001 | Evidenciado |
| ASIS-007 | Confirmação | Campo existente | E-001 | Evidenciado |
| ASIS-008 | Serviços | Estrutura sem registros | E-001 | Gap |
| ASIS-009 | Automação | Não evidenciada | E-001 | A investigar |
| ASIS-010 | Integrações | Não evidenciadas | E-001 | A investigar |
| ASIS-011 | Métricas | Não evidenciadas | E-001 | Gap |

---

# 13. Conclusão

O baseline demonstra uma estrutura inicial de controle da agenda
baseada em data, horário, disponibilidade, cliente, telefone e
confirmação.

A evidência disponível permite identificar a estrutura dos dados,
mas não permite determinar integralmente o processo operacional,
suas regras de negócio ou suas integrações.

Por esse motivo, a próxima etapa deverá transformar os gaps
identificados em requisitos, mantendo separadas as informações
comprovadas das hipóteses ainda não validadas.

---

# 14. Próxima etapa

Converter os gaps identificados em:

**GAP → REQUISITO → PRIORIDADE → CRITÉRIO DE ACEITE**

Somente após essa etapa deverá ser definida a solução TO-BE e
avaliada a necessidade de automação.
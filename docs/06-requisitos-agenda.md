# Requisitos — Agenda Monica Hair

## Projeto

Vitrine Inteligente — Case #001

## Cliente

Monica Hair

## Data

05/09/2026

## Origem

Requisitos derivados da análise AS-IS do processo de agendamento.

## Documento de origem

`docs/05-as-is-agenda.md`

## Evidência de origem

E-001 — Baseline Operacional da Agenda

---

# 1. Objetivo

Definir os requisitos necessários para evoluir o processo de
agendamento identificado no AS-IS.

Os requisitos foram derivados dos gaps observados na estrutura
atual da agenda.

Este documento define o que a solução deverá atender.

A definição de tecnologia e arquitetura será realizada
posteriormente.

---

# 2. Princípios

A evolução da agenda deverá:

- reduzir dependências operacionais desnecessárias;
- estruturar os dados utilizados no agendamento;
- preservar a integridade das informações;
- permitir controle de disponibilidade;
- permitir identificação do cliente;
- permitir registro do contato;
- permitir controle do status do agendamento;
- possibilitar automação futura;
- possibilitar mensuração;
- manter rastreabilidade das alterações.

---

# 3. Requisitos Funcionais

## RF-001 — Cadastro da solicitação

A solução deverá permitir registrar uma solicitação de agendamento.

### Dados mínimos

- nome;
- telefone;
- data desejada;
- horário desejado;
- serviço/procedimento.

### Critério de aceite

Uma solicitação válida deverá gerar um registro estruturado
contendo os dados mínimos definidos.

---

## RF-002 — Controle de disponibilidade

A solução deverá permitir identificar se determinado horário
está disponível para agendamento.

### Critério de aceite

Um horário indisponível não deverá ser apresentado como
disponível para uma nova solicitação.

---

## RF-003 — Registro do cliente

A solução deverá permitir associar o cliente à solicitação
de agendamento.

### Critério de aceite

Cada solicitação deverá possuir identificação do cliente.

---

## RF-004 — Registro do telefone

A solução deverá permitir registrar o telefone utilizado
para contato com o cliente.

### Critério de aceite

Uma solicitação válida deverá possuir telefone em formato
compatível com o processo de atendimento.

---

## RF-005 — Controle de status

A solução deverá permitir identificar o estado do agendamento.

### Estados iniciais

- solicitado;
- confirmado;
- cancelado;
- concluído.

### Critério de aceite

Cada agendamento deverá possuir um estado identificável.

---

## RF-006 — Controle de conflitos

A solução deverá impedir a criação de dois agendamentos
confirmados para o mesmo horário quando o serviço e as regras
operacionais forem incompatíveis.

### Critério de aceite

Uma tentativa de ocupação de horário já indisponível deverá
ser rejeitada ou direcionada para outro horário.

---

## RF-007 — Registro do serviço

A solução deverá permitir associar o serviço solicitado ao
agendamento.

### Critério de aceite

O agendamento deverá identificar o serviço solicitado.

---

## RF-008 — Validação dos dados

A solução deverá validar os dados obrigatórios antes de
registrar o agendamento.

### Critério de aceite

Solicitações incompletas ou inválidas não deverão ser
registradas como agendamentos válidos.

---

## RF-009 — Confirmação

A solução deverá permitir registrar a confirmação do
agendamento.

### Critério de aceite

Deverá ser possível identificar se o agendamento está
confirmado ou não.

---

## RF-010 — Histórico

A solução deverá preservar informações suficientes para
permitir rastrear o ciclo de vida do agendamento.

### Critério de aceite

Deverá ser possível identificar pelo menos:

- data;
- horário;
- cliente;
- telefone;
- serviço;
- status.

---

# 4. Requisitos de Automação

## RA-001 — Automação futura

A solução deverá possuir estrutura compatível com futura
automação das etapas operacionais.

A automação não será considerada implementada nesta etapa.

### Critério de aceite

Os dados necessários para automação deverão estar
estruturados e disponíveis para integração futura.

---

## RA-002 — Comunicação

A arquitetura futura deverá permitir integração com canal
de comunicação utilizado pelo atendimento.

A integração não é considerada implementada neste documento.

### Critério de aceite

Deverá existir um ponto claramente definido para integração
com o canal de comunicação.

---

# 5. Requisitos de Mensuração

## RM-001 — Registro de eventos

A evolução da solução deverá permitir registrar eventos
relevantes do processo de conversão e agendamento.

### Eventos candidatos

- início da solicitação;
- envio da solicitação;
- sucesso do agendamento;
- confirmação;
- cancelamento.

### Critério de aceite

Os eventos definidos deverão possuir nomenclatura
padronizada e contexto suficiente para análise.

---

## RM-002 — Rastreabilidade

Os eventos deverão permitir relacionar a ação ao estágio
correspondente do funil.

### Critério de aceite

Cada evento deverá possuir identificação suficiente para
ser associado ao processo de conversão.

---

# 6. Requisitos Não Funcionais

## RNF-001 — Integridade

A solução deverá evitar registros inconsistentes ou
duplicados decorrentes de operações concorrentes.

---

## RNF-002 — Segurança

Dados pessoais utilizados no processo deverão ser tratados
de acordo com os requisitos aplicáveis de segurança e privacidade.

---

## RNF-003 — Disponibilidade

A solução deverá permanecer disponível durante o período
operacional definido para atendimento.

---

## RNF-004 — Manutenibilidade

A solução deverá possuir estrutura que permita evolução
sem alteração desnecessária de componentes não relacionados.

---

## RNF-005 — Observabilidade

A solução deverá permitir identificar falhas relevantes
no processo de agendamento.

---

## RNF-006 — Rastreabilidade

Alterações relevantes no processo deverão ser identificáveis
por meio de documentação, versionamento ou registros
operacionais apropriados.

---

# 7. Matriz de Rastreabilidade

| ID | Origem | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|---|
| RF-001 | GAP-001/GAP-005 | Registrar solicitação | Alta | Registro estruturado |
| RF-002 | GAP-002 | Controlar disponibilidade | Alta | Horário indisponível não pode ser reservado |
| RF-003 | AS-IS | Registrar cliente | Alta | Cliente identificado |
| RF-004 | AS-IS | Registrar telefone | Alta | Telefone válido |
| RF-005 | GAP-003 | Controlar status | Alta | Estado identificável |
| RF-006 | GAP-002 | Evitar conflito | Alta | Conflito rejeitado |
| RF-007 | GAP-001 | Registrar serviço | Alta | Serviço associado |
| RF-008 | AS-IS | Validar dados | Alta | Dados inválidos rejeitados |
| RF-009 | GAP-003 | Registrar confirmação | Alta | Confirmação identificável |
| RF-010 | GAP-005 | Preservar histórico | Média | Ciclo de vida rastreável |
| RA-001 | GAP-004 | Preparar automação | Média | Integração futura possível |
| RA-002 | GAP-004 | Preparar comunicação | Média | Canal de integração definido |
| RM-001 | GAP-005 | Mensurar eventos | Alta | Eventos padronizados |
| RM-002 | GAP-005 | Rastrear funil | Média | Evento associado ao funil |
| RNF-001 | Evolução | Integridade | Alta | Dados consistentes |
| RNF-002 | Evolução | Segurança | Alta | Dados tratados adequadamente |
| RNF-003 | Evolução | Disponibilidade | Média | Operação disponível |
| RNF-004 | Evolução | Manutenibilidade | Média | Evolução controlada |
| RNF-005 | GAP-005 | Observabilidade | Média | Falhas identificáveis |
| RNF-006 | Evolução | Rastreabilidade | Alta | Alterações identificáveis |

---

# 8. Priorização

## P0 — Essencial

- RF-001
- RF-002
- RF-003
- RF-004
- RF-005
- RF-006
- RF-007
- RF-008
- RF-009
- RNF-001
- RNF-002

## P1 — Importante

- RF-010
- RA-001
- RA-002
- RM-001
- RNF-005
- RNF-006

## P2 — Evolução

- RM-002
- RNF-003
- RNF-004

---

# 9. Fora do escopo deste item

Este documento não implementa:

- automação n8n;
- integração com Google Calendar;
- integração com WhatsApp;
- alterações na planilha Baseline 0;
- alterações na landing page;
- dashboard;
- infraestrutura cloud;
- banco de dados;
- novas regras de negócio não validadas.

Esses elementos serão avaliados somente após a definição
dos requisitos.

---

# 10. Próxima etapa

Converter os requisitos priorizados em uma solução TO-BE.

Fluxo:

GAP
↓
REQUISITO
↓
PRIORIDADE
↓
ARQUITETURA TO-BE
↓
DECISÃO TECNOLÓGICA
↓
IMPLEMENTAÇÃO
↓
TESTE
↓
EVIDÊNCIA
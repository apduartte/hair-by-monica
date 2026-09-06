# TO-BE — Arquitetura da Agenda Monica Hair

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

## Evidência de referência

E-001 — Baseline Operacional da Agenda

---

# 1. Objetivo

Definir a arquitetura TO-BE para evolução do processo de
agendamento da Monica Hair.

A arquitetura deverá atender aos requisitos definidos na etapa
anterior, reduzir dependências operacionais desnecessárias,
preservar os dados da agenda e preparar o processo para
automação, mensuração e evolução futura.

A arquitetura será definida a partir dos requisitos e dos
trade-offs identificados.

---

# 2. Problema arquitetural

O processo atual possui uma estrutura inicial de controle
da agenda, porém existem gaps relacionados a:

- controle operacional;
- regras de disponibilidade;
- confirmação;
- estruturação dos dados;
- integração;
- automação;
- mensuração;
- rastreabilidade.

A solução TO-BE deverá evoluir o processo sem comprometer
a operação existente e sem modificar o Baseline 0 utilizado
como evidência histórica.

---

# 3. Princípios arquiteturais

A solução deverá seguir os seguintes princípios:

## PA-001 — Evolução incremental

A arquitetura deverá permitir evolução progressiva,
evitando uma migração desnecessariamente complexa.

## PA-002 — Baixo acoplamento

Componentes deverão possuir responsabilidades claras e
preferencialmente independentes.

## PA-003 — Preservação do dado

A estrutura existente deverá permanecer disponível como
referência durante a evolução.

## PA-004 — Automação orientada ao processo

A automação deverá ser aplicada às etapas que apresentarem
benefício operacional comprovado.

## PA-005 — Observabilidade

Eventos relevantes deverão permitir acompanhamento do
processo e identificação de falhas.

## PA-006 — Segurança

Dados pessoais deverão ser tratados considerando os
requisitos aplicáveis de segurança e privacidade.

## PA-007 — Simplicidade operacional

A solução deverá evitar complexidade técnica que não
produza benefício proporcional para a operação.

---

# 4. Alternativas consideradas

## Alternativa A — Manter processo manual

### Descrição

Continuar utilizando a planilha como principal mecanismo
de controle operacional.

### Vantagens

- nenhuma migração;
- baixo custo;
- baixa complexidade;
- continuidade imediata.

### Desvantagens

- elevada dependência de intervenção humana;
- baixa automação;
- baixa rastreabilidade;
- dificuldade de integração;
- pouca capacidade de mensuração.

### Avaliação

Adequada como Baseline, mas insuficiente para atender
integralmente aos requisitos de evolução.

---

# 5. Alternativa B — Google Apps Script

### Descrição

Utilizar Google Apps Script para adicionar lógica e
automação diretamente ao ecossistema Google Sheets.

### Vantagens

- integração direta com Google Sheets;
- baixo custo inicial;
- implementação relativamente simples;
- redução da infraestrutura necessária.

### Desvantagens

- maior acoplamento ao ecossistema Google;
- evolução limitada para fluxos mais complexos;
- menor separação entre dados e orquestração;
- necessidade de manutenção do código de automação.

### Avaliação

Adequada para automações simples e de baixo volume.

---

# 6. Alternativa C — n8n + Google Sheets

### Descrição

Utilizar o n8n como camada de orquestração,
mantendo o Google Sheets como armazenamento operacional
inicial.

### Vantagens

- separação entre armazenamento e orquestração;
- integração com múltiplos serviços;
- facilidade para construir workflows;
- possibilidade de integração com WhatsApp;
- possibilidade de integração com Google Calendar;
- evolução incremental;
- baixo esforço inicial comparado a um backend dedicado.

### Desvantagens

- introdução de novo componente;
- necessidade de gerenciamento da automação;
- dependência da disponibilidade do n8n;
- necessidade de tratamento de erros e observabilidade.

### Avaliação

Apresenta boa aderência aos requisitos de automação e
integração do MVP.

---

# 7. Alternativa D — n8n + Google Calendar + canal de comunicação

### Descrição

Utilizar o n8n como orquestrador, Google Sheets como
estrutura operacional inicial, Google Calendar para
controle de compromissos e canal de comunicação para
confirmações e notificações.

### Vantagens

- maior integração do processo;
- redução de tarefas manuais;
- melhor experiência operacional;
- possibilidade de confirmação automática;
- possibilidade de lembretes;
- maior rastreabilidade;
- possibilidade de evolução do funil.

### Desvantagens

- maior complexidade;
- maior número de integrações;
- necessidade de tratamento de falhas;
- necessidade de controle de credenciais;
- necessidade de observabilidade;
- dependência de serviços externos.

### Avaliação

Adequada como evolução do MVP, desde que os requisitos
e as regras operacionais sejam previamente validados.

---

# 8. Alternativa E — Backend dedicado

### Descrição

Construir uma aplicação backend própria para controlar
integralmente o processo de agendamento.

### Vantagens

- maior controle;
- maior flexibilidade;
- domínio explícito das regras de negócio;
- maior capacidade de escala;
- possibilidade de arquitetura distribuída.

### Desvantagens

- maior custo;
- maior tempo de implementação;
- maior complexidade operacional;
- necessidade de infraestrutura;
- necessidade de manutenção;
- complexidade desproporcional ao estágio atual da operação.

### Avaliação

Não recomendado para o MVP atual.

Pode representar uma evolução futura caso volume,
complexidade ou requisitos justifiquem a mudança.

---

# 9. Matriz de decisão

| Critério | Manual | Apps Script | n8n + Sheets | n8n + Calendar + Comunicação | Backend |
|---|---:|---:|---:|---:|---:|
| Baixa complexidade inicial | Alta | Alta | Média | Média | Baixa |
| Automação | Baixa | Média | Alta | Alta | Alta |
| Integração | Baixa | Média | Alta | Alta | Alta |
| Evolução incremental | Baixa | Média | Alta | Alta | Média |
| Controle de regras | Baixa | Média | Média/Alta | Alta | Alta |
| Observabilidade | Baixa | Baixa/Média | Média/Alta | Média/Alta | Alta |
| Custo inicial | Baixo | Baixo | Médio | Médio | Alto |
| Adequação ao MVP | Média | Alta | Alta | Alta* | Baixa |

`*` A integração completa deverá ser implementada somente
após validação das regras e dos requisitos correspondentes.

---

# 10. Decisão arquitetural

## DEC-001

Para o MVP da evolução da agenda, a arquitetura escolhida
será baseada em:

**Landing Page → Orquestração → Google Sheets**

com possibilidade de evolução para:

**Landing Page → n8n → Google Sheets + Google Calendar
+ canal de comunicação**

A implementação deverá ocorrer de forma incremental.

---

# 11. Justificativa da decisão

A decisão prioriza:

- aderência aos requisitos;
- baixo custo de entrada;
- evolução incremental;
- possibilidade de integração;
- redução de tarefas manuais;
- preservação da estrutura operacional existente;
- capacidade de mensuração;
- possibilidade de expansão futura.

A escolha não representa uma decisão definitiva de
tecnologia para toda a operação.

Representa uma decisão arquitetural adequada ao estágio
atual do problema.

---

# 12. Arquitetura TO-BE — MVP

Fluxo proposto:

Cliente
↓
Landing Page
↓
Solicitação de agendamento
↓
Orquestração
↓
Validação dos dados
↓
Consulta de disponibilidade
↓
Registro do agendamento
↓
Atualização do status
↓
Confirmação
↓
Atendimento

---

# 13. Arquitetura TO-BE — Evolução

A arquitetura poderá evoluir para:

Cliente
↓
Landing Page
↓
Webhook
↓
n8n
├── Validação
├── Regras de negócio
├── Google Sheets
├── Google Calendar
├── Comunicação
└── Registro de eventos
↓
Confirmação
↓
Atendimento
↓
Métricas
↓
Otimização

---

# 14. Responsabilidade dos componentes

## Landing Page

Responsável por:

- apresentar os serviços;
- gerar intenção de contato;
- coletar dados;
- iniciar a solicitação de agendamento.

## Orquestração

Responsável por:

- receber solicitações;
- validar dados;
- coordenar integrações;
- controlar fluxo;
- tratar erros;
- registrar eventos.

## Google Sheets

Responsável inicialmente por:

- armazenar dados operacionais;
- manter registros da agenda;
- permitir consulta operacional.

## Google Calendar

Responsabilidade futura:

- representar compromissos;
- facilitar visualização da agenda;
- apoiar integração operacional.

A implementação deverá ser precedida pela validação
das regras de negócio.

## Canal de comunicação

Responsabilidade futura:

- confirmação;
- notificações;
- lembretes;
- comunicação operacional.

---

# 15. Fluxo de dados

## Entrada

A solicitação deverá conter:

- nome;
- telefone;
- data;
- horário;
- serviço.

## Processamento

A solução deverá:

1. receber a solicitação;
2. validar os dados;
3. verificar disponibilidade;
4. verificar conflito;
5. registrar a solicitação;
6. atualizar o status;
7. gerar os eventos correspondentes.

## Saída

O processo deverá produzir:

- registro do agendamento;
- status;
- informação de confirmação;
- evento de mensuração;
- comunicação futura, quando implementada.

---

# 16. Tratamento de falhas

A solução deverá considerar pelo menos:

## FALHA-001 — Dados inválidos

A solicitação deverá ser rejeitada e o usuário deverá
receber orientação para corrigir os dados.

## FALHA-002 — Horário indisponível

O horário não deverá ser confirmado.

## FALHA-003 — Conflito de agendamento

O sistema deverá impedir a confirmação de conflito.

## FALHA-004 — Falha de integração

A falha deverá ser identificável e não deverá resultar
em confirmação incorreta do agendamento.

## FALHA-005 — Falha de comunicação

Uma falha no canal de comunicação não deverá alterar
indevidamente o estado real do agendamento.

---

# 17. Segurança

A evolução deverá considerar:

- proteção de dados pessoais;
- controle de acesso;
- proteção de credenciais;
- princípio do menor privilégio;
- não exposição desnecessária de dados;
- rastreabilidade de operações relevantes.

Credenciais e tokens não deverão ser armazenados no
repositório.

---

# 18. Observabilidade

A implementação deverá permitir acompanhar pelo menos:

- solicitação recebida;
- solicitação rejeitada;
- disponibilidade consultada;
- agendamento registrado;
- agendamento confirmado;
- agendamento cancelado;
- falha de integração.

Os eventos deverão seguir a taxonomia definida em:

`docs/04-event-taxonomy.md`

---

# 19. Riscos

| ID | Risco | Impacto | Mitigação |
|---|---|---|---|
| R-001 | Regra de negócio desconhecida | Alto | Validar antes da implementação |
| R-002 | Conflito de horários | Alto | Validar disponibilidade antes da confirmação |
| R-003 | Falha de integração | Alto | Tratamento de erros e observabilidade |
| R-004 | Dependência externa | Médio | Definir fallback operacional |
| R-005 | Dados inconsistentes | Alto | Validação e regras de integridade |
| R-006 | Exposição de dados | Alto | Controle de acesso e proteção de credenciais |
| R-007 | Complexidade excessiva | Médio | Implementação incremental |

---

# 20. Trade-offs aceitos

A solução aceita:

- utilizar Google Sheets como armazenamento inicial;
- utilizar componentes externos para integração;
- evoluir por etapas;
- manter parte da operação manual durante a transição.

Em contrapartida, busca:

- reduzir esforço operacional;
- aumentar rastreabilidade;
- preparar automação;
- permitir mensuração;
- preservar capacidade de evolução.

---

# 21. O que NÃO será implementado nesta etapa

Não fazem parte desta decisão inicial:

- migração completa para banco de dados;
- backend dedicado;
- arquitetura distribuída;
- Kubernetes;
- infraestrutura complexa;
- substituição imediata da planilha;
- automação de regras não validadas;
- alterações no Baseline 0.

---

# 22. Critérios para evolução

A arquitetura poderá ser revista caso ocorram:

- aumento significativo do volume de agendamentos;
- necessidade de regras complexas;
- necessidade de concorrência elevada;
- necessidade de maior disponibilidade;
- necessidade de persistência transacional;
- necessidade de múltiplos usuários operacionais;
- limitações do Google Sheets;
- necessidade de maior observabilidade.

---

# 23. Resultado esperado

A arquitetura TO-BE deverá permitir a evolução do processo
sem exigir uma transformação completa da operação em uma
única etapa.

A solução será construída de forma incremental:

Requisitos
↓
MVP
↓
Validação
↓
Automação
↓
Mensuração
↓
Otimização
↓
Evolução arquitetural

---

# 24. Próxima etapa

Implementar somente os componentes necessários para validar
a arquitetura escolhida.

Antes da implementação definitiva deverão ser definidos:

- fluxo do workflow;
- contratos de entrada e saída;
- regras de validação;
- estratégia de tratamento de erros;
- eventos;
- critérios de teste;
- evidências esperadas.

A implementação deverá produzir evidências suficientes para
validar a decisão arquitetural.
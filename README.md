
````markdown
# Hair by Monica — Appointment Management System

> Case de Engenharia de Software aplicado à transformação de um processo operacional de agendamento em um fluxo digital estruturado, mensurável e evolutivo.

[![Status](https://img.shields.io/badge/status-MVP%20em%20evolução-blue)]()
[![Frontend](https://img.shields.io/badge/frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)]()
[![Backend](https://img.shields.io/badge/backend-Google%20Apps%20Script-green)]()
[![Data](https://img.shields.io/badge/data-Google%20Sheets-yellow)]()
[![Channel](https://img.shields.io/badge/channel-WhatsApp-25D366)]()

---

## 1. Executive Summary

O **Hair by Monica** é um case de Engenharia de Software aplicado à transformação de um processo real de agendamento em um fluxo digital estruturado, mensurável e evolutivo.

O projeto parte de um processo operacional com dependência de controles manuais e evolui para uma solução digital capaz de receber, validar, processar e registrar solicitações de agendamento.

A abordagem adotada é incremental, priorizando simplicidade, baixo acoplamento e capacidade de evolução.

---

## 2. Problema

O processo de agendamento apresentava dependência de controles manuais, dificultando a organização das solicitações, a validação das informações e o acompanhamento dos registros.

Esse cenário também limitava a estruturação de integrações, automações e métricas para acompanhamento do processo.

O desafio de engenharia foi transformar esse processo em um fluxo digital organizado, validável e preparado para evolução.

---

## 3. Objetivo

Transformar o processo de agendamento em um fluxo digital estruturado, validável e rastreável, reduzindo a dependência de controles manuais e melhorando o controle das solicitações.

A solução deve permitir:

- receber solicitações de agendamento de forma estruturada;
- validar os dados antes do registro;
- centralizar os registros;
- organizar o processo de agendamento;
- estabelecer uma base para futuras automações e integrações.

A abordagem adotada é incremental e orientada ao problema, evitando complexidade prematura e permitindo que a solução evolua conforme as necessidades do negócio.

**Objetivo de engenharia:** criar uma base confiável, controlável e evolutiva para o processo de agendamento.

---

## 4. Engenharia Aplicada

A solução estrutura o processo de agendamento em um fluxo digital simples, organizado e rastreável.

```text
Cliente
   ↓
Landing Page
   ↓
Validação dos dados
   ↓
Google Apps Script
   ↓
Google Sheets
   ↓
Registro do agendamento
````

A engenharia aplicada ao case envolve:

* análise do processo atual;
* levantamento de requisitos;
* definição de regras de negócio;
* definição da arquitetura;
* separação entre apresentação, processamento e persistência;
* validação dos dados antes da persistência;
* documentação das decisões técnicas;
* definição de estratégia de testes;
* planejamento da evolução arquitetural.

A implementação foi conduzida de forma incremental, priorizando primeiro a estruturação do fluxo essencial e deixando integrações e automações mais avançadas para etapas posteriores.

---

## 5. Arquitetura

A solução utiliza uma arquitetura incremental, separando a interface de apresentação, o processamento das solicitações e a persistência dos dados.

```text
Cliente
   ↓
Landing Page
   ↓
Validação
   ↓
Google Apps Script
   ↓
Google Sheets
```

A separação entre essas responsabilidades reduz o acoplamento e permite evoluir os componentes conforme novos requisitos surgirem.

A arquitetura proposta estabelece uma base para futuras evoluções, como:

* controle de disponibilidade;
* integração com calendário;
* confirmação automática;
* integração com WhatsApp;
* métricas operacionais;
* observabilidade do fluxo.

A arquitetura detalhada está documentada em [`07-to-be-arquitetura.md`](docs/07-to-be-arquitetura.md).

---

## 6. Stack

| Camada        | Tecnologia            |
| ------------- | --------------------- |
| Front-end     | HTML, CSS, JavaScript |
| Processamento | Google Apps Script    |
| Persistência  | Google Sheets         |
| Comunicação   | WhatsApp              |
| Hosting       | Vercel                |

A stack foi definida considerando o estágio atual do projeto, o volume esperado, o baixo custo operacional e a possibilidade de evolução da solução.

---

## 7. Decisões Técnicas

As decisões técnicas foram definidas a partir dos requisitos atuais do negócio, buscando equilíbrio entre simplicidade, custo operacional, baixo acoplamento e capacidade de evolução.

| Decisão                                             | Justificativa                                                                                                                                          |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Google Apps Script como camada de processamento** | Permite processar as solicitações e integrar a aplicação ao ecossistema Google sem a necessidade de uma infraestrutura backend dedicada neste estágio. |
| **Google Sheets como persistência inicial**         | Atende à necessidade atual de armazenamento e controle dos agendamentos, mantendo baixo o custo operacional.                                           |
| **Separação entre interface e processamento**       | Mantém a Landing Page desacoplada da lógica de processamento e da persistência dos dados.                                                              |
| **Validação antes da persistência**                 | Permite analisar os dados recebidos antes do registro, reduzindo inconsistências.                                                                      |
| **Arquitetura incremental**                         | Permite evoluir a solução conforme novos requisitos surgirem, evitando complexidade prematura.                                                         |
| **Automação como evolução arquitetural**            | Mantém a possibilidade de incorporar calendário, WhatsApp, confirmações, métricas e observabilidade em etapas posteriores.                             |

**Princípio adotado:** utilizar a tecnologia adequada ao estágio atual do problema, mantendo a solução preparada para evoluir de forma controlada e sustentável.

---

## 8. Funcionalidades

A solução disponibiliza funcionalidades voltadas à captação e organização das solicitações de agendamento.

* **Formulário de agendamento:** coleta estruturada dos dados do cliente.
* **Validação de dados:** verifica os campos antes do envio.
* **Validação de data e horário:** aplica as regras definidas para atendimento.
* **Seleção de procedimento:** identifica o serviço solicitado.
* **Processamento:** encaminha a solicitação ao Google Apps Script.
* **Persistência:** registra os dados no Google Sheets.
* **Feedback:** apresenta o resultado do processamento ao usuário.
* **WhatsApp:** disponibiliza canal direto de contato e conversão.

As funcionalidades foram organizadas para atender primeiro às necessidades essenciais do processo e permitir a evolução gradual para automação, calendário, confirmações e monitoramento.

---

## 9. Regras de Negócio

As regras de negócio definem as condições mínimas para que uma solicitação de agendamento seja considerada válida e encaminhada para registro.

* **Procedimento:** o cliente deve selecionar um procedimento disponível no formulário de agendamento.
* **Data:** não são permitidas datas anteriores à data atual.
* **Horário:** a solicitação deve respeitar o horário de atendimento definido para o salão.
* **Dias de atendimento:** o agendamento deve ocorrer dentro dos dias disponíveis para atendimento.
* **Telefone:** o número informado deve seguir o formato esperado para telefone celular brasileiro.
* **Dados obrigatórios:** os campos necessários para o agendamento devem ser preenchidos antes do envio.
* **Validação:** os dados são validados antes de serem encaminhados para persistência.
* **Registro:** somente solicitações que passam pelas validações são encaminhadas para registro.

Essas regras estabelecem a base para futuras evoluções, como:

* controle de disponibilidade;
* prevenção de conflitos;
* confirmação automática;
* integração com calendário.

---

## 10. Testes

Os testes têm como objetivo verificar se o fluxo de agendamento atende às regras definidas e se os dados são processados corretamente.

A estratégia contempla:

* **Validação de campos obrigatórios** antes do envio.
* **Validação do telefone** informado pelo cliente.
* **Validação da data** para impedir solicitações com datas anteriores.
* **Validação de dias e horários** conforme as regras de atendimento.
* **Validação do procedimento** selecionado.
* **Teste do envio dos dados** para o Google Apps Script.
* **Teste do registro** das informações no Google Sheets.
* **Teste do retorno ao usuário** após o processamento.
* **Testes de cenários inválidos**, garantindo que solicitações inconsistentes sejam rejeitadas.

Os casos de teste e respectivos critérios de aceite são mantidos na documentação técnica do projeto, permitindo rastrear os requisitos até sua validação.

> **Objetivo dos testes:** garantir que as regras de negócio sejam respeitadas e que o fluxo de agendamento produza resultados consistentes antes da evolução da solução.

---

## 11. Segurança

A segurança da solução considera principalmente a proteção dos dados enviados pelo cliente, o controle do fluxo de processamento e a redução da exposição de informações sensíveis.

As principais medidas consideradas são:

* **Validação dos dados de entrada** antes do processamento.
* **Separação entre interface e processamento**, evitando expor diretamente a camada de persistência.
* **Não exposição de credenciais ou configurações sensíveis** no código público.
* **Uso de HTTPS** para comunicação com a aplicação hospedada.
* **Controle de acesso à base de dados**, mantendo o Google Sheets restrito aos usuários autorizados.
* **Minimização dos dados coletados**, mantendo apenas as informações necessárias para o processo de agendamento.
* **Tratamento de erros**, evitando apresentar informações internas da aplicação ao usuário.
* **Evolução planejada dos controles de segurança** conforme novas integrações e automações forem incorporadas.

> **Princípio de segurança:** proteger os dados desde a entrada até o armazenamento, aplicando controles compatíveis com o nível de risco e com a evolução da arquitetura.

**Observação:** o README apresenta os princípios de segurança em nível executivo. Os controles técnicos detalhados devem permanecer na documentação específica do projeto.

---

## 12. Status

O projeto encontra-se em **evolução**, com a estruturação do processo de agendamento e sua documentação técnica em consolidação.

### Implementado

* Landing Page para apresentação dos serviços.
* Formulário de agendamento.
* Validação dos dados informados.
* Processamento das solicitações por Google Apps Script.
* Registro dos dados no Google Sheets.
* Regras básicas de validação do agendamento.
* Documentação do processo atual e da arquitetura proposta.

### Em evolução

* Automação do agendamento.
* Controle de disponibilidade.
* Integração com calendário.
* Confirmações automatizadas via WhatsApp.
* Métricas e monitoramento operacional.
* Ampliação da observabilidade do fluxo.

O projeto segue uma abordagem **incremental**, priorizando primeiro a organização e a confiabilidade do processo para, posteriormente, incorporar novas capacidades.

> **Status:** MVP em evolução — base funcional estabelecida e arquitetura preparada para próximos incrementos.

---

## 13. Documentação

A documentação técnica registra a evolução do projeto desde o entendimento do problema até a definição da solução e sua implementação.

Os documentos estão organizados para permitir **rastreabilidade, análise técnica e evolução incremental**.

| Documento                                                         | Objetivo                                                                             |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [`01-baseline.md`](docs/01-baseline.md)                           | Registra o cenário inicial e estabelece a linha de base do projeto.                  |
| [`02-funnel.md`](docs/02-funnel.md)                               | Documenta o fluxo de conversão e os principais pontos de interação.                  |
| [`03-kpis.md`](docs/03-kpis.md)                                   | Define indicadores para acompanhamento do desempenho.                                |
| [`04-event-taxonomy.md`](docs/04-event-taxonomy.md)               | Estrutura os eventos relevantes para mensuração do fluxo.                            |
| [`05-as-is-agenda.md`](docs/05-as-is-agenda.md)                   | Documenta o processo atual de agendamento.                                           |
| [`06-requisitos-agenda.md`](docs/06-requisitos-agenda.md)         | Define requisitos funcionais, não funcionais e critérios de aceite.                  |
| [`07-to-be-arquitetura.md`](docs/07-to-be-arquitetura.md)         | Apresenta a arquitetura proposta e as decisões que a fundamentam.                    |
| [`08-fluxo-tecnico.md`](docs/08-fluxo-tecnico.md)                 | Detalha o fluxo técnico da solução.                                                  |
| [`09-contrato-agendamento.md`](docs/09-contrato-agendamento.md)   | Define o contrato de dados do processo de agendamento.                               |
| [`10-especificacao-tecnica.md`](docs/10-especificacao-tecnica.md) | Registra a especificação técnica necessária para a evolução da implementação.        |
| [`evidencias/`](docs/evidencias/)                                 | Reúne evidências utilizadas para validar decisões, resultados e evolução do projeto. |

A documentação segue uma sequência lógica:

```text
Baseline
   ↓
AS-IS
   ↓
Requisitos
   ↓
TO-BE
   ↓
Fluxo Técnico
   ↓
Contrato
   ↓
Especificação
   ↓
Implementação
   ↓
Evidências
```

> **Princípio:** documentar as decisões e evidências necessárias para que o projeto seja compreendido, avaliado e evoluído por outras pessoas.

---

## 14. Demo

A aplicação está disponível online para demonstração da experiência do cliente e do fluxo de agendamento.

**Acessar a aplicação:**

[https://hair-by-monica.vercel.app/](https://hair-by-monica.vercel.app/)

A demonstração permite avaliar:

* apresentação dos serviços;
* experiência da Landing Page;
* navegação e responsividade;
* chamada para ação via WhatsApp;
* formulário de agendamento;
* validações do processo;
* experiência de solicitação de atendimento.

> **Nota:** a Demo representa o estado atual da aplicação. Funcionalidades descritas como evolução futura no README não devem ser interpretadas como funcionalidades já disponíveis em produção.

---

## 15. Roadmap

A evolução do projeto será conduzida de forma **incremental**, priorizando impacto operacional, confiabilidade e baixo acoplamento.

### Próximas etapas

1. **Automação do agendamento**

   * Estruturar o processamento automático das solicitações.
   * Reduzir atividades manuais no controle da agenda.

2. **Controle de disponibilidade**

   * Estruturar a verificação de horários disponíveis.
   * Reduzir o risco de conflitos de agendamento.

3. **Integração com calendário**

   * Sincronizar os agendamentos com uma agenda digital.
   * Facilitar o controle de disponibilidade e compromissos.

4. **Confirmação automática**

   * Implementar comunicação com o cliente após a solicitação.
   * Utilizar o WhatsApp como canal de confirmação.

5. **Observabilidade e métricas**

   * Monitorar os principais eventos do fluxo.
   * Acompanhar indicadores de conversão e operação.
   * Criar evidências para orientar decisões de melhoria.

6. **Evolução arquitetural**

   * Avaliar novas tecnologias conforme o crescimento dos requisitos.
   * Substituir componentes quando houver justificativa técnica ou operacional.
   * Preservar a evolução incremental da solução.

> **Princípio do roadmap:** evoluir a solução conforme necessidades reais e evidências, evitando complexidade técnica antes que ela seja necessária.

---

## 16. Autoria

Projeto desenvolvido por **Ana Paula Duarte**, como case prático de **Engenharia de Software aplicada a um problema real de negócio**.

A construção do projeto envolve análise do problema, definição de requisitos, decisões arquiteturais, implementação, documentação e planejamento de evolução.

### Competências demonstradas

* Engenharia de Software
* Arquitetura e integração de sistemas
* Backend e automação
* Desenvolvimento Web
* Cloud e infraestrutura
* Análise de requisitos
* Documentação técnica
* Observabilidade e métricas
* Pensamento orientado a produto e negócio

### Princípio de trabalho

```text
Think
  ↓
Decide
  ↓
Build
  ↓
Prove
```

O **Hair by Monica** representa a aplicação prática desse processo:

**Think** — compreender o problema e os requisitos.

**Decide** — avaliar alternativas e tomar decisões técnicas fundamentadas.

**Build** — implementar a solução de forma incremental.

**Prove** — documentar testes, evidências e resultados.

**Ana Paula Duarte**
Software Engineer | Backend | Cloud | Automation

GitHub: `apduartte`
Projeto: `hair-by-monica`

`````

### Principais correções realizadas

| Antes | Correção |
|---|---|
| `## 2. Problema` descrevia a solução | Agora descreve **o problema operacional e o desafio de engenharia** |
| Bloco de código encerrado com ````markdown` | Corrigido para fechamento Markdown válido |
| Arquitetura sem fechamento do bloco | Corrigida |
| **Stack** continha tabela de decisões | Separada corretamente |
| **Decisões Técnicas** duplicava a Stack | Agora contém apenas trade-offs e justificativas |
| Funcionalidades em texto corrido | Convertidas em lista estruturada |
| “Integração com WhatsApp” | Ajustado para **canal de contato e conversão**, sem afirmar integração sistêmica inexistente |
| “serviço disponível para agendamento” | Ajustado para **procedimento disponível no formulário** |
| `10-especificacao-*.md` | Substituído por `10-especificacao-tecnica.md` |
| Roadmap iniciava diretamente em automação | Incluído **controle de disponibilidade** como etapa intermediária |
| Competências excessivamente amplas | Reduzidas para competências mais defensáveis |
| Autoria apenas nominal | Conectada ao método **Think → Decide → Build → Prove** |

**Minha avaliação:** esta versão já está em nível adequado para ser o `README.md` principal do repositório. O próximo passo não deveria ser continuar aumentando o README, mas **garantir que cada afirmação do README esteja efetivamente sustentada pelo código, pelos documentos `01–10` e pelas evidências do case**. Isso é o que transforma o README de apresentação em evidência de engenharia.
`````

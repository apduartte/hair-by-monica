# Especificação Técnica — Agendamento Monica Hair

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
- `docs/09-contrato-agendamento.md`

---

# 1. Objetivo

Definir a especificação técnica necessária para implementar o fluxo de agendamento da Monica Hair.

Este documento transforma os requisitos, a arquitetura proposta e o contrato técnico em critérios objetivos para implementação e validação.

A especificação define:

- entradas;
- processamento;
- validações;
- regras de negócio;
- persistência;
- estados;
- respostas;
- tratamento de erros;
- segurança;
- observabilidade;
- critérios de aceite;
- evolução técnica.

A implementação deve respeitar esta especificação e o contrato definido em `docs/09-contrato-agendamento.md`.

---

# 2. Escopo

O escopo desta especificação compreende o processamento de uma solicitação de agendamento originada na Landing Page Monica Hair.

O fluxo deve permitir:

1. receber os dados do cliente;
2. validar os dados de entrada;
3. validar as regras de agendamento;
4. verificar a disponibilidade do horário;
5. identificar conflitos;
6. registrar a solicitação;
7. atualizar o estado da solicitação;
8. retornar uma resposta ao cliente;
9. registrar eventos relevantes para rastreabilidade.

Integrações adicionais, como confirmação automática, calendário e automações externas, são consideradas etapas de evolução e não fazem parte do núcleo mínimo desta especificação.

---

# 3. Arquitetura lógica

O fluxo lógico do agendamento deve seguir a seguinte sequência:

```text
Cliente
   ↓
Landing Page
   ↓
Formulário de Agendamento
   ↓
Recepção da Solicitação
   ↓
Validação
   ↓
Consulta da Agenda
   ↓
Verificação de Conflito
   ↓
Persistência
   ↓
Atualização do Estado
   ↓
Resposta
   ↓
Eventos / Evidências
```

# 4. Componentes

A solução é composta pelas seguintes responsabilidades:

| Componente           | Responsabilidade                                                  |
| -------------------- | ----------------------------------------------------------------- |
| Landing Page         | Apresentar os serviços e iniciar a solicitação de agendamento.    |
| Formulário           | Coletar os dados necessários para a solicitação.                  |
| Camada de recepção   | Receber a solicitação enviada pela interface.                     |
| Validação            | Verificar formato, obrigatoriedade e consistência dos dados.      |
| Consulta da agenda   | Verificar a disponibilidade do horário solicitado.                |
| Controle de conflito | Impedir o registro de horários incompatíveis.                     |
| Persistência         | Registrar a solicitação e seus dados.                             |
| Estado               | Representar a situação atual da solicitação.                      |
| Resposta             | Informar o resultado do processamento ao cliente.                 |
| Eventos              | Registrar informações relevantes para rastreabilidade e métricas. |

# 5. Entrada de dados

A solicitação deve respeitar o contrato definido para a operação AGENDAMENTO-001.

Os campos obrigatórios são:

Campo	Tipo	Obrigatório	Regra
nome	string	Sim	Deve conter o nome do cliente.
telefone	string	Sim	Deve conter um telefone válido para contato.
data	date	Sim	Deve representar a data desejada para atendimento.
horario	time	Sim	Deve representar o horário desejado.
servico	string	Sim	Deve identificar o serviço solicitado.
origem	string	Sim	Deve identificar a origem da solicitação.

O contrato completo está definido em:

docs/09-contrato-agendamento.md

# 6. Payload

O payload deve utilizar o formato definido no contrato técnico.

Exemplo:

{
  "nome": "Cliente Exemplo",
  "telefone": "5511999999999",
  "data": "2026-09-10",
  "horario": "14:00",
  "servico": "Corte",
  "origem": "Landing Page Monica Hair"
}

Os nomes dos campos devem permanecer consistentes entre a interface, a camada de processamento e a persistência.

Alterações no contrato devem ser documentadas antes de serem incorporadas à implementação.

# 7. Validação de entrada

A validação deve ocorrer antes de qualquer persistência.

A solicitação deve ser rejeitada quando:

existir campo obrigatório ausente;
o telefone estiver em formato inválido;
a data estiver em formato inválido;
a data for anterior à data atual;
o horário estiver em formato inválido;
o serviço não estiver informado;
a origem não estiver informada;
os dados não atenderem às regras definidas para agendamento.

Nenhum dado inválido deve ser persistido como solicitação válida.

# 8. Regras de agendamento

A solicitação deve respeitar as regras de negócio definidas para o atendimento.

8.1 Data

A data solicitada não pode ser anterior à data atual.

8.2 Dias de atendimento

A solicitação deve ocorrer em um dia disponível para atendimento.

8.3 Horário

O horário solicitado deve estar dentro do período de atendimento definido para o salão.

8.4 Procedimento

O serviço informado deve corresponder a um procedimento disponível para solicitação.

8.5 Disponibilidade

O horário solicitado deve ser verificado antes da confirmação do agendamento.

8.6 Conflito

Uma solicitação não deve ser confirmada quando existir conflito com outro agendamento válido para o mesmo período.

# 9. Consulta de disponibilidade

A verificação de disponibilidade deve ocorrer antes do registro definitivo da solicitação.

O processamento deve responder à seguinte condição:

Horário solicitado
       ↓
Existe conflito?
   ↙           ↘
 SIM           NÃO
  ↓             ↓
Rejeita       Continua

Quando houver conflito, a solicitação não deve ser registrada como agendamento confirmado.

Quando não houver conflito, o processamento pode prosseguir para persistência.

O mecanismo específico de consulta da agenda poderá evoluir conforme a arquitetura de implementação adotada.

# 10. Persistência

A persistência deve ocorrer **somente após a validação da solicitação e a aplicação das regras de agendamento**.

O mecanismo de persistência deve registrar os dados necessários para garantir **rastreabilidade, consistência e recuperação das informações do processo**.

## 10.1 Dados persistidos

Cada solicitação deve preservar, no mínimo:

| Campo | Finalidade |
|---|---|
| `nome` | Identificar o cliente. |
| `telefone` | Permitir contato com o cliente. |
| `data` | Registrar a data solicitada. |
| `horario` | Registrar o horário solicitado. |
| `servico` | Identificar o serviço solicitado. |
| `origem` | Identificar a origem da solicitação. |
| `status` | Representar o estado atual da solicitação. |
| `created_at` | Registrar quando a solicitação foi criada. |
| `updated_at` | Registrar a última alteração do registro. |

## 10.2 Regra de persistência

O fluxo deve obedecer à seguinte sequência:

```text
Receber solicitação
        ↓
Validar dados
        ↓
Validar regras de negócio
        ↓
Verificar disponibilidade
        ↓
Identificar conflito
        ↓
Persistir
        ↓
Atualizar estado
        ↓
Retornar resposta
```

**Dados inválidos ou solicitações com conflito não devem ser persistidos como agendamentos válidos.**

## 10.3 Integridade do registro

O registro persistido deve permitir responder, posteriormente:

- quem realizou a solicitação;
- qual serviço foi solicitado;
- para qual data e horário;
- quando a solicitação foi recebida;
- qual era sua origem;
- qual estado foi atribuído;
- quando o registro foi atualizado.

A persistência deve preservar a relação entre **solicitação, processamento e resultado**.

## 10.4 Consistência

A aplicação não deve retornar uma resposta de sucesso quando a persistência não tiver sido concluída corretamente.

```text
Processamento
      ↓
Persistência concluída?
   ↙             ↘
 NÃO             SIM
 ↓                ↓
Erro            Sucesso
 ↓                ↓
Não confirma    Retorna resposta
```

## 10.5 Atualização do estado

A alteração do estado deve ocorrer de forma consistente com o resultado efetivo do processamento.

Exemplo:

```text
RECEBIDO
   ↓
VALIDADO
   ↓
DISPONIBILIDADE_VERIFICADA
   ↓
REGISTRADO
```

Uma solicitação **não deve assumir um estado de sucesso sem que o registro correspondente exista na camada de persistência**.

## 10.6 Rastreabilidade

A persistência deve fornecer evidência suficiente para reconstruir o fluxo da solicitação.

```text
Cliente
   ↓
Solicitação
   ↓
Validação
   ↓
Processamento
   ↓
Persistência
   ↓
Estado
   ↓
Resultado
```

## 10.7 Evolução

No MVP, a persistência pode utilizar o mecanismo definido para a implementação atual.

A substituição ou evolução desse mecanismo — por exemplo, para um banco de dados ou outro serviço de persistência — deve ocorrer somente quando houver justificativa relacionada a:

- volume;
- concorrência;
- disponibilidade;
- integridade;
- segurança;
- observabilidade;
- manutenção;
- custo operacional.

> **Princípio:** persistir somente dados válidos, manter o estado consistente e garantir que cada solicitação possa ser rastreada desde sua entrada até seu resultado.

# 11. Estados do agendamento

O processo deve representar explicitamente o estado da solicitação.

### Estados do MVP

```text
RECEBIDO
   ↓
VALIDADO
   ↓
DISPONIBILIDADE_VERIFICADA
   ↓
REGISTRADO
```

# 12. Fluxo de processamento

O processamento deve seguir a sequência abaixo:

1. Receber solicitação
        ↓
2. Validar estrutura
        ↓
3. Validar regras de negócio
        ↓
4. Consultar disponibilidade
        ↓
5. Verificar conflito
        ↓
6. Persistir
        ↓
7. Atualizar estado
        ↓
8. Retornar resposta
        ↓
9. Registrar evento
Regra principal

A persistência deve ocorrer somente depois que a solicitação tiver passado pelas validações necessárias.

# 13. Respostas

A camada de processamento deve retornar uma resposta compatível com o resultado da operação.

Solicitação válida
{
  "status": "success",
  "message": "Solicitação de agendamento registrada."
}
Dados inválidos
{
  "status": "error",
  "message": "Dados de agendamento inválidos."
}
Conflito de horário
{
  "status": "conflict",
  "message": "O horário solicitado não está disponível."
}

As mensagens apresentadas ao cliente devem ser claras e não devem expor informações internas da implementação.

# 14. Tratamento de erros

Os erros devem ser tratados de forma controlada.

A solução deve diferenciar:

Tipo	Tratamento
Dados inválidos	Rejeitar solicitação e informar o problema.
Horário indisponível	Rejeitar solicitação como conflito.
Falha de processamento	Informar falha controlada ao cliente e registrar o evento.
Falha de persistência	Não informar sucesso ao cliente. Registrar a falha para análise.
Erro inesperado	Retornar resposta genérica e registrar evidência técnica.

O sistema não deve apresentar stack trace, credenciais, endpoints internos ou informações técnicas sensíveis ao cliente.

# 15. Idempotência e duplicidade

A evolução do processo deve considerar o risco de uma mesma solicitação ser enviada mais de uma vez.

A solução deve evitar o registro duplicado de uma mesma solicitação quando houver elementos suficientes para sua identificação.

A estratégia definitiva de idempotência deverá ser definida conforme o mecanismo de persistência e processamento adotado.

Até que essa capacidade esteja implementada, o comportamento deve ser documentado como limitação conhecida.

# 16. Segurança

A implementação deve aplicar controles compatíveis com os dados processados.

Requisitos mínimos:

validar todos os dados recebidos;
não confiar exclusivamente na validação realizada no navegador;
não expor credenciais no código público;
restringir o acesso à persistência;
utilizar comunicação segura;
evitar exposição de informações internas nas mensagens de erro;
coletar somente os dados necessários ao processo;
controlar o acesso aos registros de agendamento.

A segurança deve ser considerada desde a entrada dos dados até sua persistência.

# 17. Observabilidade

O fluxo deve permitir identificar os principais eventos do processo.

Eventos relevantes:

booking_start
booking_submit
booking_success
booking_error
booking_conflict

Os eventos devem permitir acompanhar:

início da solicitação;
envio do formulário;
processamento bem-sucedido;
falhas;
conflitos;
evolução da conversão.

A taxonomia de eventos está documentada em:

docs/04-event-taxonomy.md

# 18. Evidências

Cada etapa relevante da evolução deve produzir evidências que permitam verificar a implementação e os resultados.

As evidências podem incluir:

registros de execução;
capturas de tela;
exemplos de payload;
registros de agendamento;
resultados de testes;
métricas;
alterações de arquitetura;
resultados de validação.

A evidência deve estar relacionada ao requisito ou decisão que pretende comprovar.

# 19. Critérios de aceite

A implementação será considerada aderente à especificação quando atender aos seguintes critérios:

ID	Critério
CT-01	Receber todos os campos obrigatórios do contrato.
CT-02	Rejeitar campos obrigatórios ausentes.
CT-03	Validar o telefone informado.
CT-04	Rejeitar datas anteriores à data atual.
CT-05	Validar dia e horário de atendimento.
CT-06	Validar o serviço solicitado.
CT-07	Verificar disponibilidade antes do registro.
CT-08	Identificar conflito de horário.
CT-09	Persistir somente solicitações válidas.
CT-10	Registrar o estado da solicitação.
CT-11	Retornar resposta compatível com o resultado.
CT-12	Não expor informações internas em erros.
CT-13	Registrar eventos relevantes do fluxo.
CT-14	Permitir rastrear a solicitação até seu registro.

# 20. Cenários de teste

A especificação deve ser validada, no mínimo, pelos seguintes cenários:

Cenário	Entrada	Resultado esperado
Agendamento válido	Dados completos e horário disponível	Solicitação registrada
Nome ausente	Campo obrigatório vazio	Solicitação rejeitada
Telefone inválido	Formato inválido	Solicitação rejeitada
Data anterior	Data menor que a atual	Solicitação rejeitada
Dia indisponível	Dia fora do atendimento	Solicitação rejeitada
Horário inválido	Horário fora da janela permitida	Solicitação rejeitada
Serviço ausente	Campo não informado	Solicitação rejeitada
Horário em conflito	Horário já ocupado	Solicitação rejeitada
Falha de processamento	Erro durante processamento	Resposta controlada + evidência
Falha de persistência	Registro não realizado	Não informar sucesso

# 21. Rastreabilidade

A implementação deve manter rastreabilidade entre requisito, especificação e validação.

Requisito
   ↓
Regra de Negócio
   ↓
Especificação Técnica
   ↓
Implementação
   ↓
Teste
   ↓
Evidência

Essa relação permite verificar se cada requisito relevante foi efetivamente implementado e validado.

Os requisitos funcionais e não funcionais estão definidos em:

docs/06-requisitos-agenda.md

# 22. Limites da implementação atual

A especificação estabelece a direção técnica do fluxo, mas nem todos os componentes descritos precisam estar implementados no estado atual do MVP.

Devem ser distinguidos:

Núcleo implementável
formulário;
validação;
processamento da solicitação;
registro;
retorno ao usuário.
Capacidades de evolução
controle automatizado de disponibilidade;
prevenção automatizada de conflitos;
integração com calendário;
confirmação automática;
automação via WhatsApp;
observabilidade ampliada;
métricas operacionais avançadas.

Essa separação evita que capacidades planejadas sejam apresentadas como funcionalidades já disponíveis.

# 23. Evolução arquitetural

A solução deve evoluir de forma incremental.

A evolução prevista é:

MVP
 ↓
Automação do processamento
 ↓
Controle de disponibilidade
 ↓
Integração com calendário
 ↓
Confirmação automática
 ↓
Observabilidade
 ↓
Métricas
 ↓
Evolução arquitetural

Cada nova etapa deve ser precedida por:

identificação do problema;
definição do requisito;
avaliação das alternativas;
decisão técnica;
implementação;
teste;
evidência;
documentação.

A adoção de novas tecnologias deve ocorrer somente quando houver justificativa técnica ou operacional.

# 24. Critério de evolução

A arquitetura não deve ser ampliada apenas por preferência tecnológica.

Uma evolução deve ser considerada quando houver pelo menos uma necessidade objetiva relacionada a:

volume;
disponibilidade;
confiabilidade;
automação;
integração;
observabilidade;
segurança;
manutenção;
custo operacional.

O princípio adotado é:

Evoluir a arquitetura quando o problema justificar a evolução.

# 25. Resultado esperado

Ao final da implementação, o processo deverá permitir que uma solicitação de agendamento percorra um fluxo controlado:

Cliente
   ↓
Solicitação
   ↓
Validação
   ↓
Disponibilidade
   ↓
Conflito
   ↓
Registro
   ↓
Estado
   ↓
Resposta
   ↓
Evidência

O resultado esperado é um processo de agendamento:

estruturado;
validável;
rastreável;
consistente;
preparado para automação;
preparado para integração;
preparado para evolução arquitetural.

# 26. Princípio de implementação

A implementação deve seguir quatro princípios:

1. Simplicidade

Implementar somente a complexidade necessária ao estágio atual.

2. Separação de responsabilidades

Manter apresentação, processamento e persistência desacoplados.

3. Rastreabilidade

Toda regra relevante deve poder ser relacionada a requisito, implementação, teste e evidência.

4. Evolução incremental

Novas capacidades devem ser incorporadas conforme requisitos e evidências justificarem sua adoção.

## Referências

- [`05-as-is-agenda.md`](05-as-is-agenda.md)
- [`06-requisitos-agenda.md`](06-requisitos-agenda.md)
- [`07-to-be-arquitetura.md`](07-to-be-arquitetura.md)
- [`08-fluxo-tecnico.md`](08-fluxo-tecnico.md)
- [`09-contrato-agendamento.md`](09-contrato-agendamento.md)
- [`04-event-taxonomy.md`](04-event-taxonomy.md)

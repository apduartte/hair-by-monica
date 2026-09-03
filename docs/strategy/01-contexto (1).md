# Monica Hair — Contexto e Modelo de Negócio

**Documento:** `01-contexto.md`  
**Versão:** 1.0  
**Status:** Base de Discovery — AS-IS  
**Data:** 01/09/2026

## 1. Objetivo

Registrar o contexto operacional e comercial identificado no Product Discovery da Monica Hair, distinguindo fatos observados, percepções da operação e dados ainda não medidos.

**Regra:** não inventar métricas, estimativas ou funcionalidades. Informações ausentes devem ser registradas como `não medido`, `não informado` ou `a validar`.

## 2. Contexto

A operação é baseada em relacionamento direto com as clientes. A jornada conhecida começa pelo **WhatsApp**, passa por atendimento e negociação manual, consulta da agenda, escolha de horário e registro do agendamento.

A operação também possui uma estratégia de recorrência baseada em **pacotes de hidratação e terapia capilar**.

## 3. Locais de atendimento

- Domicílio
- Tatuapé
- Mauá

A distribuição dos atendimentos depende da disponibilidade da agenda. O deslocamento entre locais **não é considerado formalmente** no planejamento.

## 4. Jornada AS-IS

```text
Cliente
  ↓
WhatsApp
  ↓
Mônica responde
  ↓
Pergunta o que deseja
  ↓
Serviço + preço
  ↓
Define local
(domicílio / Tatuapé / Mauá)
  ↓
Consulta agenda de papel
  ↓
Oferece alguns horários
  ↓
Cliente escolhe
  ↓
Horário é registrado
  ↓
Atendimento
  ↓
Pós-atendimento / recorrência
```

Após o agendamento:
- não existe confirmação;
- não existe lembrete;
- não existe confirmação de presença;
- existem cancelamentos;
- existem clientes que não comparecem;
- no-shows não são medidos;
- todos os agendamentos exigem atuação manual da Mônica.

## 5. Agenda

A agenda operacional é mantida **em papel**.

Para agendar, Mônica:
1. consulta a agenda;
2. identifica horários disponíveis;
3. oferece opções;
4. a cliente escolhe;
5. registra o horário.

Não existe, no processo atual identificado, planejamento formal por região, deslocamento ou otimização de rotas.

## 6. Cancelamentos e horários vagos

São relatados aproximadamente **2 cancelamentos por semana**.

Quando ocorre cancelamento:

```text
Cancelamento
   ↓
Horário disponível
   ↓
Mônica procura cliente que queria horário
   ↓
Contato manual
   ↓
Tentativa de preencher horário
```

Não existe lista de espera formal.

## 7. No-show

No-show significa cliente com agendamento que não comparece e não cancela previamente.

A operação informa que isso acontece, mas a quantidade é **não medida**.

## 8. Operação

- Trabalho: segunda a sábado.
- Média informada: **3 clientes por dia**.
- Agendamentos: aproximadamente **15 por semana**.
- Cancelamentos: aproximadamente **2 por semana**.
- Todos os agendamentos exigem atuação manual.
- O tempo gasto com gestão/WhatsApp **não é conhecido**.
- O acompanhamento operacional ocorre nos intervalos entre atendimentos.

A diferença entre 3 clientes/dia em 6 dias e 15 agendamentos/semana será mantida como ponto de validação, sem assumir que as métricas representam exatamente a mesma coisa.

## 9. Modelo comercial — pacote

A Monica Hair trabalha com pacote promocional de hidratação e terapia capilar:

| Característica | Regra atual |
|---|---|
| Sessões | 5 |
| Pagamento | Antecipado |
| Intervalo | 7 ou 15 dias |
| Critério | Depende do objetivo |
| Prazo de utilização | Não existe |
| Oferta | Todas as clientes |
| Renovação | Sim |

## 10. Recorrência

O processo informado é:

```text
Sessão
  ↓
Intervalo de 7 ou 15 dias
  ↓
Mensagem manual da Mônica
  ↓
Próximo agendamento
  ↓
Nova sessão
  ↓
...
  ↓
5ª sessão
  ↓
Oferta de novo pacote
```

Exemplo de mensagem:

> “Querida, quando você vem ao salão para fazer a próxima hidratação do pacote?”

Existe, portanto, uma estratégia de retenção e recorrência, mas executada manualmente.

## 11. Problemas relatados pela operação

1. Falta de tempo.
2. Muitas mensagens.
3. Dificuldade para organizar a agenda.
4. Clientes que cancelam.
5. Clientes que não aparecem.
6. Dificuldade de fazer clientes retornarem.
7. Dificuldade para preencher horários vagos.
8. Locomoção entre domicílio, Tatuapé e Mauá.

## 12. Organização dos problemas

### Atendimento
- Muitas mensagens.
- Atendimento inicial manual.
- Agendamentos dependentes da Mônica.

### Agenda e operação
- Agenda em papel.
- Consulta manual.
- Registro manual.
- Dificuldade de organização.
- Múltiplos locais.
- Deslocamento não considerado formalmente.

### Ocupação
- Cancelamentos.
- No-shows.
- Horários vagos.
- Recuperação manual.

### Retenção
- Acompanhamento manual.
- Retorno das clientes.
- Gestão dos pacotes.
- Renovação.

## 13. Dados conhecidos

| Indicador | Situação |
|---|---|
| Canal inicial identificado | WhatsApp |
| Dias de trabalho | Segunda a sábado |
| Média de clientes | 3/dia |
| Agendamentos | ~15/semana |
| Cancelamentos | ~2/semana |
| Agenda | Papel |
| Confirmação | Não existe |
| Lembrete | Não existe |
| Confirmação de presença | Não existe |
| Lista de espera | Não existe |
| Recuperação de cancelamento | Manual |
| Locais | Domicílio, Tatuapé e Mauá |
| Pacote | 5 sessões |
| Pagamento | Antecipado |
| Intervalo | 7 ou 15 dias |
| Prazo | Não existe |
| Oferta do pacote | Todas |
| Renovação | Sim |

## 14. Dados ainda não medidos

- Tempo diário gasto com WhatsApp.
- Tempo gasto com gestão da agenda.
- Quantidade de no-shows.
- Clientes que não conseguem horário.
- Horários recuperados após cancelamentos.
- Horários que permanecem vagos.
- Taxa de retorno.
- Taxa de conclusão dos pacotes.
- Taxa de renovação.
- Impacto financeiro de cancelamentos/no-shows.
- Tempo de deslocamento entre atendimentos.

## 15. Prioridade definida pela operação

Quando solicitada a escolher a dificuldade mais importante, a operação escolheu:

> **Organizar e facilitar a agenda.**

Isso representa uma **prioridade de investigação**, não uma decisão antecipada de solução tecnológica.

### Formulação inicial

> **A gestão da agenda é realizada manualmente em uma agenda de papel e exige que a Mônica consulte, interprete e registre os horários durante o processo de atendimento às clientes.**

### Hipótese inicial

> **A gestão manual da agenda, combinada com diferentes locais de atendimento e ausência de consideração formal do deslocamento, pode gerar ineficiência operacional e reduzir a previsibilidade da capacidade de atendimento.**

Esta é uma hipótese, não uma conclusão validada.

## 16. O que ainda não devemos afirmar

Não há evidência suficiente para afirmar que:
- falta de automação é a causa principal;
- existe determinada quantidade de horas perdidas;
- cancelamentos geram determinado prejuízo;
- no-shows representam determinada taxa;
- lembretes resolverão cancelamentos;
- agenda em papel causa perda de clientes;
- é necessário um sistema completo de agenda.

## 17. Próxima investigação

Precisamos descobrir **quais informações a Mônica registra para cada cliente/agendamento**, como:
- nome;
- telefone;
- serviço;
- data;
- horário;
- local;
- endereço, quando for domicílio;
- pacote;
- sessão do pacote;
- valor;
- pagamento;
- observações;
- duração prevista;
- outras informações usadas na operação.

## 18. Próxima sequência do Discovery

```text
CONTEXTO
  ↓
AS-IS
  ↓
PROBLEMA
  ↓
EVIDÊNCIA
  ↓
CAUSAS A INVESTIGAR
  ↓
HIPÓTESES
  ↓
MÉTRICAS
  ↓
GUT
  ↓
PROBLEMA PRIORITÁRIO
  ↓
TO-BE
  ↓
MVP / PARETO
  ↓
SOLUÇÃO
  ↓
VALIDAÇÃO
  ↓
APRENDIZADO
```

A tecnologia será consequência do diagnóstico, e não o ponto de partida.

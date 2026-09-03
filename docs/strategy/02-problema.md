# Monica Hair — Discovery e Problema Prioritário

**Documento:** `02-problema.md`  
**Versão:** 1.0  
**Status:** Em construção — Discovery  
**Data:** 01/09/2026

---

## 1. Objetivo

Registrar as descobertas realizadas durante o Product Discovery da Monica Hair, preservando a distinção entre fatos observados, problemas relatados pela operação, hipóteses, dados ainda não medidos e decisões de priorização.

**Regra metodológica:** não inventar métricas ou estimativas. Quando uma informação não estiver disponível, registrar como `não medido`, `não informado` ou `a validar`.

---

## 2. Jornada AS-IS identificada

O fluxo atual informado pela operação é:

```text
Cliente
  ↓
WhatsApp
  ↓
Mônica responde
  ↓
Pergunta o que a cliente deseja
  ↓
Serviço + preço
  ↓
Definição do local
(domicílio / Tatuapé / Mauá)
  ↓
Mônica consulta a agenda
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

### Após o agendamento

Atualmente:

- não existe confirmação de agendamento;
- não existe lembrete;
- não existe confirmação de presença;
- existem cancelamentos;
- existem clientes que não comparecem;
- a quantidade de no-shows não é medida;
- todos os agendamentos exigem atuação manual da Mônica.

### Recuperação de cancelamentos

Quando uma cliente cancela, Mônica procura manualmente uma cliente que anteriormente queria atendimento, mas não tinha horário disponível.

Não existe uma lista de espera formal.

---

## 3. Operação da agenda

### Situação atual

- A agenda é mantida **em papel**.
- Para verificar disponibilidade, Mônica precisa consultar a agenda.
- Os horários são oferecidos manualmente.
- O horário escolhido é registrado manualmente.
- A distribuição dos atendimentos depende da disponibilidade da agenda.
- O deslocamento entre diferentes locais não é formalmente considerado no planejamento.

### Locais de atendimento

- Tatuapé;
- Mauá;
- domicílio.

Portanto, a agenda envolve não apenas `data + horário`, mas também o **local do atendimento e deslocamento**.

---

## 4. Dados operacionais conhecidos

| Indicador | Informação | Status |
|---|---:|---|
| Dias de trabalho | Segunda a sábado | Confirmado |
| Média de clientes atendidas | 3 por dia | Informado pela operação |
| Agendamentos | ~15 por semana | Informado pela operação |
| Cancelamentos | ~2 por semana | Informado pela operação |
| No-show | Não informado | Não medido |
| Agendamentos com atuação manual | Todos | Confirmado |
| Tempo gasto com gestão | Não sabe estimar | Não medido |
| Lista de espera | Não existe | Confirmado |

### Observação

Existe uma diferença entre a média informada de 3 clientes por dia, em 6 dias de trabalho, e os aproximadamente 15 agendamentos por semana.

Essa diferença **não será interpretada ou corrigida** sem nova validação, pois “clientes atendidas” e “agendamentos” podem representar métricas diferentes.

---

## 5. Modelo comercial de recorrência

A Monica Hair trabalha com pacote promocional de **hidratação e terapia capilar**.

| Característica | Regra atual |
|---|---|
| Sessões por pacote | 5 |
| Pagamento | Antecipado |
| Intervalo entre sessões | 7 ou 15 dias, conforme objetivo |
| Prazo para utilização | Não existe |
| Público da oferta | Todas as clientes |
| Renovação | Mônica oferece novo pacote após o término |

### Processo de recorrência

Após uma sessão, Mônica realiza contato manual para estimular a próxima sessão.

Exemplo informado:

> “Querida, quando você vem ao salão para fazer a próxima hidratação do pacote?”

O contato ocorre aproximadamente 15 dias depois quando esse é o intervalo aplicável.

---

## 6. Problemas relatados pela operação

1. falta de tempo;
2. muitas mensagens;
3. dificuldade para organizar a agenda;
4. clientes que cancelam;
5. clientes que não aparecem;
6. dificuldade de fazer as clientes retornarem;
7. dificuldade para preencher horários vagos;
8. locomoção entre domicílio, Tatuapé e Mauá.

---

## 7. Organização dos problemas

### Atendimento
- muitas mensagens;
- atendimento inicial manual;
- agendamentos dependentes da Mônica.

### Agenda e operação
- agenda em papel;
- consulta manual;
- registro manual;
- dificuldade de organização;
- diferentes locais de atendimento;
- deslocamento não considerado formalmente.

### Ocupação da capacidade
- cancelamentos;
- clientes que não comparecem;
- horários vagos;
- recuperação manual de horários.

### Retenção
- acompanhamento manual;
- retorno das clientes;
- gestão dos pacotes;
- renovação dos pacotes.

---

## 8. Evidências x percepções x lacunas

### Evidências disponíveis
- Agenda operacional em papel.
- Consulta manual da agenda.
- Todos os agendamentos exigem atuação manual.
- Aproximadamente 15 agendamentos por semana.
- Aproximadamente 2 cancelamentos por semana.
- Não existe confirmação prévia.
- Não existe lembrete.
- Existem clientes que não comparecem.
- Cancelamentos são tratados manualmente.
- Não existe lista de espera formal.
- Existe processo manual de recorrência.
- O pacote possui 5 sessões e pagamento antecipado.

### Percepções da operação
- Falta de tempo.
- Muitas mensagens.
- Dificuldade de organizar a agenda.
- Dificuldade de fazer clientes retornarem.
- Dificuldade de preencher horários vagos.
- Dificuldade relacionada à locomoção.

### Dados ainda não medidos
- Tempo diário gasto com WhatsApp.
- Tempo gasto com gestão da agenda.
- Quantidade de no-shows.
- Quantidade de clientes que não conseguem horário.
- Quantidade de horários recuperados após cancelamento.
- Taxa de retorno das clientes.
- Taxa de conclusão dos pacotes.
- Taxa de renovação dos pacotes.
- Impacto financeiro de cancelamentos e no-shows.
- Tempo de deslocamento entre atendimentos.

---

## 9. Problema prioritário definido no Discovery

Quando solicitada a escolher a dificuldade mais importante, a operação escolheu:

> **Organizar e facilitar a agenda.**

Essa escolha representa a **prioridade de investigação do MVP**, e não uma decisão antecipada de solução tecnológica.

### Formulação inicial

> **A gestão da agenda é realizada manualmente em uma agenda de papel e exige que a Mônica consulte, interprete e registre os horários durante o processo de atendimento às clientes.**

---

## 10. Hipótese inicial do problema

> **A gestão manual da agenda, combinada com diferentes locais de atendimento e ausência de consideração formal do deslocamento, pode gerar ineficiência operacional e reduzir a previsibilidade da capacidade de atendimento.**

Essa afirmação é uma **hipótese de investigação**, não uma conclusão validada.

---

## 11. O que ainda não devemos afirmar

Não há evidência suficiente, neste momento, para afirmar que:

- a falta de automação é a causa principal;
- a Mônica perde determinado número de horas por semana;
- os cancelamentos geram determinado prejuízo financeiro;
- os no-shows representam determinada taxa;
- a ausência de lembretes é a causa dos cancelamentos;
- a agenda em papel causa perda de clientes;
- a operação necessita de um sistema completo de agenda.

---

## 12. Próxima investigação

A próxima etapa é entender o **modelo de dados da agenda atual**.

Precisamos descobrir quais informações Mônica registra para cada cliente/agendamento, por exemplo:

- nome;
- telefone;
- serviço;
- data;
- horário;
- local;
- endereço, quando for atendimento a domicílio;
- pacote;
- sessão do pacote;
- valor;
- pagamento;
- observações;
- duração prevista;
- outras informações utilizadas na operação.

Essa investigação permitirá entender o modelo operacional real antes de propor qualquer solução.

---

## 13. Próxima etapa metodológica

```text
AS-IS
  ↓
Problemas
  ↓
Evidências
  ↓
Causas a investigar
  ↓
Hipóteses
  ↓
Métricas
  ↓
GUT
  ↓
Problema prioritário
  ↓
TO-BE
  ↓
MVP / Pareto
  ↓
Solução
```

A tecnologia somente será definida **depois da compreensão e priorização do problema**.

---

## 14. Princípio do case

O case Monica Hair deve demonstrar:

**Problema → Evidência → Hipótese → Decisão → Solução → Medição → Aprendizado**

e não:

**Tecnologia → Funcionalidade → Produto.**

Isso preserva o objetivo estratégico do portfólio:

> Demonstrar **Product Thinking + Business Understanding + UX/CRO + Software Engineering + Automation**, utilizando a Monica Hair como um caso real de transformação de uma operação local.

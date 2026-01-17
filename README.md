# 💇‍♀️ Hair by Monica — Só de Segunda

Aplicativo/site de **agendamento de serviços de cabeleireiro**, com **design premium** (nude + dourado) e **integração direta ao WhatsApp**.
A disponibilidade de horários é controlada por **Google Sheets**, exposta via **Google Apps Script (API REST)** e consumida no front-end em tempo real.

---

## 🎯 Objetivo

Facilitar o agendamento de forma simples e elegante:

1. a cliente escolhe o serviço
2. visualiza **somente horários disponíveis**
3. seleciona o horário
4. o WhatsApp abre com mensagem pré-formatada
5. o salão confirma e atualiza a planilha

---

## ✨ Funcionalidades

* Tela inicial com mensagem de boas-vindas
* Lista de serviços com ícones/emojis (✂️ 🎨 💧 🌸)
* Modal de atendimento com horários disponíveis
* Botão **Agendar** → abre WhatsApp automaticamente
* Navegação entre **Serviços** e **Horários**
* Status de agendamento:

  * **Confirmado:** `#2FBF71`
  * **Pendente:** `#F5A623`
  * **Cancelado:** `#9B9B9B`

---

## 🧩 Arquitetura (Visão geral)

**Frontend (HTML/CSS/JS)** → consome **API (Apps Script)** → lê dados no **Google Sheets** → cliente escolhe → **WhatsApp** abre com texto pronto.

### Componentes

1. **Frontend (Site)**

   * Página responsiva e clean
   * Serviços: Corte, Coloração, Hidratação, Escova
   * Modal com:

     * mensagem de boas-vindas
     * lista dinâmica de horários disponíveis
   * Ao selecionar horário → redireciona para WhatsApp

2. **Google Sheets (banco de dados simples)**

   * Controla disponibilidade e confirmações
   * Apenas horários com **Disponível = SIM** aparecem no site

3. **Google Apps Script (API REST)**

   * Publica um endpoint público que retorna horários disponíveis em **JSON**
   * O frontend busca esses dados e renderiza no modal

4. **WhatsApp (canal de conversão)**

   * Link dinâmico: `https://wa.me/SEUNUMERO?text=...`
   * Mensagem já inclui serviço e horário escolhido

---

## 📄 Estrutura do Google Sheets (modelo)

Colunas recomendadas:

* **Data**
* **Horário**
* **Disponível** (SIM/NÃO)
* **Cliente**
* **Telefone**
* **Confirmado** (SIM/NÃO)
* **Observações** (opcional)

**Regra principal:** o site exibe somente linhas com **Disponível = SIM**.

---

## 🔁 Fluxo de Funcionamento

1. Cliente acessa o site/app
2. Escolhe um serviço (ex.: **Corte**)
3. Abre o modal com a mensagem:

   > “Olá, seja bem-vinda! Qual seria o melhor horário pra você?”
4. O site busca os horários disponíveis via API do Sheets
5. Cliente seleciona um horário
6. WhatsApp abre com mensagem pré-formatada
7. O salão confirma o agendamento e atualiza a planilha

---

## 🎨 Identidade Visual (Premium)

Paleta proposta (feminina + moderna):

* **Primária:** Rosa queimado `#C96B87`
* **Secundária:** Rosé claro `#F4D6DF`
* **Fundo:** Off-white `#FFF7FA`
* **Texto:** Grafite `#2B2B2B`
* **CTA:** Coral elegante `#FF6B6B`
* **Detalhe premium:** Dourado suave `#C8A25A`

Tipografia sugerida:

* **Títulos:** *Playfair Display* (sofisticada)
* **Texto:** *Open Sans* (limpa e moderna)
* **Botões:** *Montserrat Bold* (forte e legível)

Cards de serviço:

* Fundo branco com borda rosé
* Emoji discreto por serviço
* Título em rosa queimado + descrição em grafite

---

## 🚀 Como usar

1. Publique o app (Glide) **ou** faça deploy do site (GitHub Pages).
2. Configure a planilha (Google Sheets) com datas e horários.
3. Publique o Apps Script como Web App (endpoint JSON).
4. No site, selecione um serviço e clique em **Agendar**.
5. O WhatsApp abrirá com a mensagem preenchida.

---

## 🌐 Publicação

### Opção A — Glide

* Pode publicar com plano gratuito (**Explorer**).
* Domínio próprio (ex.: `app.seudominio.com`) normalmente exige plano pago.

### Opção B — Site (GitHub Pages)

* Hospedagem gratuita e simples para um MVP.
* Pode usar domínio próprio apontando para GitHub Pages.

---

## ✅ Boas práticas (projeto)

* Commits semânticos: `feat`, `fix`, `docs`, `refactor`, `chore`
* Versionamento com Git + GitHub
* Manter a planilha atualizada para refletir horários reais
* Evitar expor dados sensíveis (telefone/nomes) publicamente no endpoint

---

## 📌 Próximos passos (evolução do MVP)

* CRUD completo de clientes e reservas
* Painel administrativo para gerenciar agendamentos
* Notificações automáticas (confirmação/lembrete)
* Integração com Google Calendar
* Login personalizado e pacotes premium (⭐ 👑 💎)

---

## 👩‍💻 Autoria

Projeto desenvolvido por **Ana Paula Duarte** para o salão **Hair by Monica — Só de Segunda**.
Identidade visual criada para transmitir **sofisticação, feminilidade e exclusividade**.

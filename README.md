# 💇‍♀️ Hair by Monica — Só de Segunda

Hair by Monica — Só de Segunda: mini app de agendamento com experiência premium, onde a cliente escolhe o serviço, visualiza apenas horários disponíveis e finaliza pelo WhatsApp com mensagem automática. Backend em Google Apps Script (API REST) integrado ao Google Sheets como banco, com front-end para cliente e painel Admin para gestão da agenda.

Aplicativo web de **agendamento de serviços de cabeleireiro** com design sofisticado e fluxo simples: a cliente escolhe o serviço, vê **somente horários disponíveis**, seleciona um horário e finaliza pelo **WhatsApp** com mensagem pré-formatada.

A disponibilidade e os agendamentos são controlados em **Google Sheets**, expostos por uma **API REST no Google Apps Script**, consumida por dois front-ends:

* **Cliente** (site público)
* **Admin** (painel de gestão da agenda)

---
## 🌐 Demo

```txt
https://apduartte.com.br/hair-by-monica/

---
## 🧠 Arquitetura

```mermaid
flowchart LR
  C[Front-end (Cliente)\nHair by Monica — Só de Segunda] <--> API[Back-end\nGoogle Apps Script (REST)]
  A[Front-end (Admin)\nadmin.html] <--> API
  API --> DB[(Banco de Dados\nGoogle Sheets)]
```

## 🎯 Objetivo

* Reduzir mensagens manuais e evitar conflito de horários
* Centralizar agenda em um lugar simples e barato (Google Sheets)
* Oferecer experiência premium e direta via WhatsApp

---

## ✨ Funcionalidades

### 👩‍💻 Cliente

* Lista de serviços
* Consulta de horários disponíveis em tempo real
* Seleção de horário
* Botão **Agendar** → abre WhatsApp com mensagem pronta

### 🛠️ Admin (`admin.html`)

* Visualizar agenda do dia (Segunda-feira)
* Bloquear/desbloquear horários
* Confirmar agendamentos (status)
* Atualizar serviços/horários via planilha

---

## 📌 Regras de negócio (MVP)

* Atendimento **somente às segundas-feiras**
* Janela de atendimento (ex.: **09:00–18:00**)
* Intervalo de almoço (ex.: **12:00–13:00**)
* Duração padrão por slot (ex.: **60 minutos**)
* Horários exibidos no cliente = **somente os livres**

---

## 🧰 Stack

* **Front-end:** HTML + CSS + JavaScript (vanilla)
* **Back-end:** Google Apps Script (API REST)
* **Banco:** Google Sheets
* **Integração:** WhatsApp (deep link com mensagem pré-formatada)

---

## 📁 Estrutura do repositório (sugestão)

```txt
hair-by-monica/
├─ frontend/
│  ├─ index.html
│  ├─ admin.html
│  ├─ assets/
│  │  ├─ icons/
│  │  └─ img/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  ├─ app.js
│  │  ├─ admin.js
│  │  └─ config.js
│  └─ README.md
├─ backend-apps-script/
│  ├─ Code.gs
│  ├─ appsscript.json
│  └─ README.md
└─ docs/
   ├─ architecture.png
   └─ api-contract.md
```

---

## 🗃️ Modelo de dados (Google Sheets)

Crie uma planilha com estas abas (sugestão):

### 1) `SERVICOS`

| coluna      | exemplo    |
| ----------- | ---------- |
| id          | hidr_01    |
| nome        | Hidratação |
| duracao_min | 60         |
| preco       | 120        |
| ativo       | TRUE       |

### 2) `AGENDA`

| coluna       | exemplo                                    |
| ------------ | ------------------------------------------ |
| data         | 2026-01-19                                 |
| hora         | 09:00                                      |
| status       | LIVRE / BLOQUEADO / RESERVADO / CONFIRMADO |
| servico_id   | hidr_01                                    |
| nome_cliente | Ana                                        |
| whatsapp     | 11999999999                                |
| observacao   | (opcional)                                 |

### 3) `CONFIG`

| chave           | valor  |
| --------------- | ------ |
| dia_atendimento | MONDAY |
| inicio          | 09:00  |
| fim             | 18:00  |
| almoco_inicio   | 12:00  |
| almoco_fim      | 13:00  |

> Você pode evoluir esse modelo conforme o produto crescer (ex.: aba CLIENTES, HISTORICO, CANCELAMENTOS).

---

## 🔌 API (Google Apps Script)

### Endpoints (contrato sugerido)

* `GET /services` → lista serviços ativos
* `GET /slots?date=YYYY-MM-DD&serviceId=...` → lista horários disponíveis
* `POST /book` → cria reserva (status: RESERVADO)
* `POST /admin/block` → bloqueia horário
* `POST /admin/confirm` → confirma reserva

> **Importante:** o Apps Script pode publicar como Web App e responder JSON via `doGet(e)` e `doPost(e)`.

---

## ⚙️ Como rodar (passo a passo)

### 1) Criar a planilha

* Crie a planilha no Google Sheets
* Adicione as abas: `SERVICOS`, `AGENDA`, `CONFIG`
* Preencha a aba `CONFIG` com horários e regras

### 2) Criar o Apps Script

* Abra **Extensões → Apps Script**
* Cole o código do `backend-apps-script/Code.gs`
* Ajuste o `SPREADSHEET_ID` (ou use `SpreadsheetApp.getActiveSpreadsheet()` se estiver dentro da própria planilha)

### 3) Publicar como Web App

* **Implantar → Nova implantação → Web app**
* Execute como: **Você**
* Quem tem acesso: **Qualquer pessoa** (para MVP)
  *(recomendado evoluir para token/autenticação no Admin)*

Guarde a URL do Web App:

```txt
https://script.google.com/macros/s/SEU_DEPLOY_ID/exec
```

### 4) Configurar o front-end

No `frontend/js/config.js`:

```js
export const API_BASE_URL = "https://script.google.com/macros/s/SEU_DEPLOY_ID/exec";
export const WHATSAPP_PHONE = "5511999999999"; // número da Monica
```

### 5) Abrir no navegador

* Rode estático (GitHub Pages, Vercel, Netlify, ou hospedagem do seu domínio)
* `index.html` → cliente
* `admin.html` → admin

---

## 🔐 Observações de segurança (MVP → produção)

Para MVP, pode funcionar público. Para evoluir:

* Proteger rotas Admin com **token**
* Validar origem e limitar rate
* Logs e auditoria (ex.: aba `LOGS`)
* Sanitização de entrada e validação forte no `doPost`

---

## 🧪 Casos de teste (rápidos)

* Não mostrar horários bloqueados ou reservados
* Impedir dupla reserva do mesmo horário
* Respeitar almoço e janela 09–18
* Selecionar serviço → slots coerentes com duração
* Botão WhatsApp com mensagem preenchida corretamente

---

## 🗺️ Roadmap

* [ ] Autenticação do Admin (token)
* [ ] Cancelamento e reagendamento
* [ ] Notificação/confirmação automática
* [ ] Histórico por cliente
* [ ] Multi-profissional (futuro)
* [ ] Multi-dias (futuro, se o negócio crescer)

---

## 🤝 Contribuição

PRs são bem-vindos. Sugestões e melhorias de UI/UX, segurança e validações da API são especialmente úteis.

---

## 📄 Licença

Defina a licença do projeto (ex.: MIT) e adicione um arquivo `LICENSE`.

---

## 👩‍💻 Autoria

Projeto desenvolvido como MVP de agendamento para cabeleireira autônoma, com foco em arquitetura simples, custo baixo e integração direta com WhatsApp.

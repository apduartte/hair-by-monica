# Hair by Monica — Só de Segunda
# 💇‍♀️ Hair by Monica — Só de Segunda

Aplicativo de agendamento de serviços de cabeleireiro, desenvolvido com **Glide** e integração ao **WhatsApp**.  
Design sofisticado com paleta **nude + dourado elegante**, pensado para transmitir exclusividade e praticidade às clientes.

---

## ✨ Funcionalidades
- Tela inicial com mensagem de boas-vindas estilizada
- Lista de serviços com ícones personalizados (✂️ 🎨 💧 🌸)
- Botão **Agendar** integrado ao WhatsApp
- Estrutura de navegação entre **Serviços** e **Horários**
- Paleta de cores feminina e moderna:
  - Primária: Rosa queimado `#C96B87`
  - Secundária: Rosé claro `#F4D6DF`
  - Fundo: Off-white `#FFF7FA`
  - Texto: Grafite `#2B2B2B`
  - CTA: Coral elegante `#FF6B6B`
  - Detalhe premium: Dourado suave `#C8A25A`

---

## 🎀 Identidade Visual
- **Tipografia**
  - Títulos: *Playfair Display* (clássico, sofisticado)
  - Corpo: *Open Sans* (limpo e moderno)
  - Botões: *Montserrat Bold* (impactante e fácil de ler)

- **Cards de Serviço**
  - Fundo branco com borda rosé claro
  - Emojis discretos para cada serviço
  - Título em rosa queimado, descrição em grafite

- **Status de Agendamento**
  - Confirmado: Verde suave `#2FBF71`
  - Pendente: Âmbar `#F5A623`
  - Cancelado: Cinza elegante `#9B9B9B`

---

## 🚀 Como usar
1. Abra o app publicado no Glide (link gerado após publicação).
2. Navegue pelos serviços disponíveis.
3. Clique em **Agendar** → abre automaticamente o WhatsApp.
4. Confirme seu horário com mensagem pré-formatada.

---

## 🌐 Publicação
- O app pode ser publicado no Glide com plano gratuito (**Explorer**).
- Para usar domínio próprio (ex: `app.seudominio.com`), é necessário plano pago (Maker/Business).
- Também pode ser documentado e exibido via **GitHub Pages**.

---

## 📌 Próximos passos
- Integração com calendário para gestão de horários
- Tela de login personalizada
- Pacotes premium com ícones exclusivos (⭐ 👑 💎)
- Conexão com domínio registrado no **dominio.com**

---

## 👩‍💻 Autoria
Projeto desenvolvido por **Ana Paula Duarte** para o salão *Hair by Monica — Só de Segunda*.  
Identidade visual criada para transmitir **sofisticação, feminilidade e exclusividade**.
-----------------------------------------------------------------------
Documentação do Projeto Hair by Monica — Só de Segunda

Visão Geral

Este projeto tem como objetivo oferecer um sistema simples e elegante de agendamento de serviços de salão de beleza através de um site integrado ao WhatsApp. O diferencial é a integração com uma planilha Google Sheets que controla a disponibilidade dos horários em tempo real.

Componentes do Sistema

1. Site HTML/CSS/JavaScript

 Frontend: Página web responsiva com design clean.

 Serviços: Corte, Coloração, Hidratação, Escova.

 Interação: Cada serviço possui um botão que abre um modal.

Modal: Exibe mensagem de boas-vindas e lista de horários disponíveis.

Horários: São carregados dinamicamente via API do Google Sheets.

Ação final: Cliente escolhe horário → redirecionamento para WhatsApp com mensagem pré-formatada.

2. Google Sheets

 Estrutura da planilha:

Colunas: Data, Horário, Disponível (SIM/NÃO), Cliente, Telefone, Confirmado.

Controle de disponibilidade: apenas horários com SIM são exibidos no site.

 Apps Script: Código que transforma a planilha em uma API REST.

API URL: Endpoint público que retorna horários disponíveis em JSON.

3. Integração WhatsApp

 Links dinâmicos: https://wa.me/SEUNUMERO?text=Mensagem

Mensagem personalizada: Inclui serviço e horário escolhido.

Confirmação: Cliente envia mensagem → você responde com confirmação.

Fluxo de Funcionamento

Cliente acessa o site.

Escolhe um serviço (ex.: Corte).

Modal abre com mensagem: "Olá, seja bem-vinda! Qual seria o melhor horário pra você?"

Lista de horários disponíveis é carregada da planilha.

Cliente clica em um horário.

WhatsApp abre com mensagem pré-formatada.

Você confirma o agendamento e atualiza a planilha.

Tecnologias Utilizadas

 Frontend: HTML5

 Frontend: CSS3

 Frontend: JavaScript

 Backend: Google Apps Script

 Banco de dados: Google Sheets

 Comunicação: WhatsApp

Boas Práticas

Mensagens de commit: usar padrão semântico (feat, fix, docs, etc.).

Controle de versão: Git + GitHub.

Disponibilidade: sempre atualizar a planilha para refletir horários reais.

Futuras Melhorias

Implementar CRUD completo para clientes e reservas.

Painel administrativo para gerenciar agendamentos.

Notificações automáticas de confirmação.

Integração com calendário (Google Calendar).

Este documento serve como guia para manutenção e evolução do projeto Hair by Monica.# Documentação do Projeto Hair by Monica — Só de Segunda

Visão Geral

Este projeto tem como objetivo oferecer um sistema simples e elegante de agendamento de serviços de salão de beleza através de um site integrado ao WhatsApp. O diferencial é a integração com uma planilha Google Sheets que controla a disponibilidade dos horários em tempo real.

Componentes do Sistema

1. Site HTML/CSS/JavaScript

 Frontend: Página web responsiva com design clean.

 Serviços: Corte, Coloração, Hidratação, Escova.

 Interação: Cada serviço possui um botão que abre um modal.

Modal: Exibe mensagem de boas-vindas e lista de horários disponíveis.

Horários: São carregados dinamicamente via API do Google Sheets.

Ação final: Cliente escolhe horário → redirecionamento para WhatsApp com mensagem pré-formatada.

2. Google Sheets

 Estrutura da planilha:

Colunas: Data, Horário, Disponível (SIM/NÃO), Cliente, Telefone, Confirmado.

Controle de disponibilidade: apenas horários com SIM são exibidos no site.

 Apps Script: Código que transforma a planilha em uma API REST.

API URL: Endpoint público que retorna horários disponíveis em JSON.

3. Integração WhatsApp

 Links dinâmicos: https://wa.me/SEUNUMERO?text=Mensagem

Mensagem personalizada: Inclui serviço e horário escolhido.

Confirmação: Cliente envia mensagem → você responde com confirmação.

Fluxo de Funcionamento

Cliente acessa o site.

Escolhe um serviço (ex.: Corte).

Modal abre com mensagem: "Olá, seja bem-vinda! Qual seria o melhor horário pra você?"

Lista de horários disponíveis é carregada da planilha.

Cliente clica em um horário.

WhatsApp abre com mensagem pré-formatada.

Você confirma o agendamento e atualiza a planilha.

Tecnologias Utilizadas

 Frontend: HTML5

 Frontend: CSS3

 Frontend: JavaScript

 Backend: Google Apps Script

 Banco de dados: Google Sheets

 Comunicação: WhatsApp

Boas Práticas

Mensagens de commit: usar padrão semântico (feat, fix, docs, etc.).

Controle de versão: Git + GitHub.

Disponibilidade: sempre atualizar a planilha para refletir horários reais.

Futuras Melhorias

Implementar CRUD completo para clientes e reservas.

Painel administrativo para gerenciar agendamentos.

Notificações automáticas de confirmação.

Integração com calendário (Google Calendar).

Este documento serve como guia para manutenção e evolução do projeto Hair by Monica.# Documentação do Projeto Hair by Monica — Só de Segunda

Visão Geral

Este projeto tem como objetivo oferecer um sistema simples e elegante de agendamento de serviços de salão de beleza através de um site integrado ao WhatsApp. O diferencial é a integração com uma planilha Google Sheets que controla a disponibilidade dos horários em tempo real.

Componentes do Sistema

1. Site HTML/CSS/JavaScript

 Frontend: Página web responsiva com design clean.

 Serviços: Corte, Coloração, Hidratação, Escova.

 Interação: Cada serviço possui um botão que abre um modal.

Modal: Exibe mensagem de boas-vindas e lista de horários disponíveis.

Horários: São carregados dinamicamente via API do Google Sheets.

Ação final: Cliente escolhe horário → redirecionamento para WhatsApp com mensagem pré-formatada.

2. Google Sheets

 Estrutura da planilha:

Colunas: Data, Horário, Disponível (SIM/NÃO), Cliente, Telefone, Confirmado.

Controle de disponibilidade: apenas horários com SIM são exibidos no site.

 Apps Script: Código que transforma a planilha em uma API REST.

API URL: Endpoint público que retorna horários disponíveis em JSON.

3. Integração WhatsApp

 Links dinâmicos: https://wa.me/SEUNUMERO?text=Mensagem

Mensagem personalizada: Inclui serviço e horário escolhido.

Confirmação: Cliente envia mensagem → você responde com confirmação.

Fluxo de Funcionamento

Cliente acessa o site.

Escolhe um serviço (ex.: Corte).

Modal abre com mensagem: "Olá, seja bem-vinda! Qual seria o melhor horário pra você?"

Lista de horários disponíveis é carregada da planilha.

Cliente clica em um horário.

WhatsApp abre com mensagem pré-formatada.

Você confirma o agendamento e atualiza a planilha.

Tecnologias Utilizadas

 Frontend: HTML5

 Frontend: CSS3

 Frontend: JavaScript

 Backend: Google Apps Script

 Banco de dados: Google Sheets

 Comunicação: WhatsApp

Boas Práticas

Mensagens de commit: usar padrão semântico (feat, fix, docs, etc.).

Controle de versão: Git + GitHub.

Disponibilidade: sempre atualizar a planilha para refletir horários reais.

Futuras Melhorias

Implementar CRUD completo para clientes e reservas.

Painel administrativo para gerenciar agendamentos.

Notificações automáticas de confirmação.

Integração com calendário (Google Calendar).

Este documento serve como guia para manutenção e evolução do projeto Hair by Monica.# Documentação do Projeto Hair by Monica — Só de Segunda

Visão Geral

Este projeto tem como objetivo oferecer um sistema simples e elegante de agendamento de serviços de salão de beleza através de um site integrado ao WhatsApp. O diferencial é a integração com uma planilha Google Sheets que controla a disponibilidade dos horários em tempo real.

Componentes do Sistema

1. Site HTML/CSS/JavaScript

 Frontend: Página web responsiva com design clean.

 Serviços: Corte, Coloração, Hidratação, Escova.

 Interação: Cada serviço possui um botão que abre um modal.

Modal: Exibe mensagem de boas-vindas e lista de horários disponíveis.

Horários: São carregados dinamicamente via API do Google Sheets.

Ação final: Cliente escolhe horário → redirecionamento para WhatsApp com mensagem pré-formatada.

2. Google Sheets

 Estrutura da planilha:

Colunas: Data, Horário, Disponível (SIM/NÃO), Cliente, Telefone, Confirmado.

Controle de disponibilidade: apenas horários com SIM são exibidos no site.

 Apps Script: Código que transforma a planilha em uma API REST.

API URL: Endpoint público que retorna horários disponíveis em JSON.

3. Integração WhatsApp

 Links dinâmicos: https://wa.me/SEUNUMERO?text=Mensagem

Mensagem personalizada: Inclui serviço e horário escolhido.

Confirmação: Cliente envia mensagem → você responde com confirmação.

Fluxo de Funcionamento

Cliente acessa o site.

Escolhe um serviço (ex.: Corte).

Modal abre com mensagem: "Olá, seja bem-vinda! Qual seria o melhor horário pra você?"

Lista de horários disponíveis é carregada da planilha.

Cliente clica em um horário.

WhatsApp abre com mensagem pré-formatada.

Você confirma o agendamento e atualiza a planilha.

Tecnologias Utilizadas

 Frontend: HTML5

 Frontend: CSS3

 Frontend: JavaScript

 Backend: Google Apps Script

 Banco de dados: Google Sheets

 Comunicação: WhatsApp

Boas Práticas

Mensagens de commit: usar padrão semântico (feat, fix, docs, etc.).

Controle de versão: Git + GitHub.

Disponibilidade: sempre atualizar a planilha para refletir horários reais.

Futuras Melhorias

Implementar CRUD completo para clientes e reservas.

Painel administrativo para gerenciar agendamentos.

Notificações automáticas de confirmação.

Integração com calendário (Google Calendar).

Este documento serve como guia para manutenção e evolução do projeto Hair by Monica.
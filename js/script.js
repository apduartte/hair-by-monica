/* =========================================
   CONFIGURAÇÃO GLOBAL
========================================= */

const CONFIG = {

  telefoneWhatsApp: "5511989687923",

  salonName: "Hair by Monica",

  webhookURL: "" // adicionar futuramente URL do n8n

};

/* =========================================
   ESTADO DA APLICAÇÃO
========================================= */

const AppState = {

  horariosReservados: []

};

/* =========================================
   UTILITÁRIOS
========================================= */

function formatarMensagemWhatsApp(dados){

  return `
Olá, gostaria de agendar um horário no salão ${CONFIG.salonName}.

Nome: ${dados.nome}
WhatsApp: ${dados.whatsapp}
Serviço: ${dados.servico}

Obrigada.
`;

}

function abrirWhatsApp(mensagem){

  const url = `https://wa.me/${CONFIG.telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");

}

function mostrarMensagem(tipo, texto){

  const mensagemExistente = document.querySelector(".mensagem-status");

  if(mensagemExistente){

    mensagemExistente.remove();

  }

  const mensagem = document.createElement("div");

  mensagem.classList.add("mensagem-status");

  mensagem.classList.add(tipo);

  mensagem.textContent = texto;

  const formulario = document.querySelector(".agendamento-form");

  formulario.prepend(mensagem);

  setTimeout(() => {

    mensagem.remove();

  }, 4000);

}

/* =========================================
   VALIDAÇÃO
========================================= */

function validarFormulario(nome, whatsapp, servico){

  if(!nome || nome.trim().length < 3){

    mostrarMensagem(
      "erro",
      "Digite um nome válido."
    );

    return false;

  }

  if(!whatsapp || whatsapp.trim().length < 10){

    mostrarMensagem(
      "erro",
      "Digite um WhatsApp válido."
    );

    return false;

  }

  if(!servico){

    mostrarMensagem(
      "erro",
      "Selecione um serviço."
    );

    return false;

  }

  return true;

}

/* =========================================
   ENVIO FORMULÁRIO
========================================= */

async function enviarFormulario(event){

  event.preventDefault();

  const botao = document.querySelector(
    '.agendamento-form button'
  );

  botao.disabled = true;

  botao.textContent = "Enviando...";

  try{

    const nome = document
      .getElementById("nome")
      .value
      .trim();

    const whatsapp = document
      .getElementById("whatsapp")
      .value
      .trim();

    const servico = document
      .getElementById("servico")
      .value;

    const dados = {

      nome,
      whatsapp,
      servico,
      criado_em: new Date().toISOString()

    };

    const valido = validarFormulario(
      nome,
      whatsapp,
      servico
    );

    if(!valido){

      botao.disabled = false;

      botao.textContent = "Agendar agora";

      return;

    }

    /* =========================================
       FUTURA INTEGRAÇÃO N8N
    ========================================= */

    if(CONFIG.webhookURL){

      await fetch(CONFIG.webhookURL, {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(dados)

      });

    }

    /* =========================================
       WHATSAPP
    ========================================= */

    const mensagem = formatarMensagemWhatsApp(dados);

    abrirWhatsApp(mensagem);

    /* =========================================
       FEEDBACK VISUAL
    ========================================= */

    mostrarMensagem(
      "sucesso",
      "Agendamento iniciado com sucesso."
    );

    event.target.reset();

  }catch(error){

    console.error(error);

    mostrarMensagem(
      "erro",
      "Erro ao enviar agendamento."
    );

  }finally{

    botao.disabled = false;

    botao.textContent = "Agendar agora";

  }

}

/* =========================================
   HORÁRIOS
========================================= */

function agendarHorario(horario){

  if(AppState.horariosReservados.includes(horario)){

    mostrarMensagem(
      "erro",
      "Este horário já foi reservado."
    );

    return;

  }

  const confirmar = confirm(
    `Confirmar agendamento para ${horario}?`
  );

  if(!confirmar){

    return;

  }

  AppState.horariosReservados.push(horario);

  atualizarHorarioUI(horario);

  mostrarMensagem(
    "sucesso",
    `Horário ${horario} reservado.`
  );

}

/* =========================================
   UI HORÁRIOS
========================================= */

function atualizarHorarioUI(horario){

  const botoes = document.querySelectorAll(
    ".horarios button"
  );

  botoes.forEach((btn) => {

    if(btn.textContent === horario){

      btn.disabled = true;

      btn.classList.add("horario-reservado");

      btn.innerHTML = `${horario} ✓`;

    }

  });

}

/* =========================================
   MÁSCARA WHATSAPP
========================================= */

function aplicarMascaraWhatsApp(){

  const input = document.getElementById("whatsapp");

  if(!input){

    return;

  }

  input.addEventListener("input", (e) => {

    let valor = e.target.value.replace(/\D/g, "");

    valor = valor.replace(
      /^(\d{2})(\d)/g,
      "($1) $2"
    );

    valor = valor.replace(
      /(\d{5})(\d)/,
      "$1-$2"
    );

    e.target.value = valor;

  });

}

/* =========================================
   INICIALIZAÇÃO
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  console.log(
    "Sistema Hair by Monica iniciado."
  );

  aplicarMascaraWhatsApp();

});
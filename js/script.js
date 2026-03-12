/* =========================================
   CONFIGURAÇÃO
========================================= */

const CONFIG = {

telefoneWhatsApp: "5511999999999", // colocar número do salão

salonName: "Hair by Monica"

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

function gerarMensagemWhatsApp(horario){

return `
Olá, gostaria de agendar um horário no salão ${CONFIG.salonName}.

Horário escolhido: ${horario}

Meu nome é:
`;

}

function abrirWhatsApp(mensagem){

const url = `https://wa.me/${CONFIG.telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;

window.open(url, "_blank");

}

/* =========================================
   AGENDAMENTO
========================================= */

function agendar(horario){

if(AppState.horariosReservados.includes(horario)){

alert("Este horário já foi reservado.");

return;

}

const confirmar = confirm(`Confirmar agendamento para ${horario}?`);

if(!confirmar) return;

AppState.horariosReservados.push(horario);

marcarHorarioIndisponivel(horario);

const mensagem = gerarMensagemWhatsApp(horario);

abrirWhatsApp(mensagem);

}

/* =========================================
   UI
========================================= */

function marcarHorarioIndisponivel(horario){

const botoes = document.querySelectorAll(".horarios button");

botoes.forEach(btn => {

if(btn.textContent === horario){

btn.disabled = true;

btn.style.background = "#999";

btn.textContent = `${horario} ✓`;

}

});

}

/* =========================================
   INICIALIZAÇÃO
========================================= */

document.addEventListener("DOMContentLoaded", () => {

console.log("Sistema de agendamento iniciado.");

});
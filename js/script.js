let horarioSelecionado = "";

function selecionarHorario(horario){
horarioSelecionado = horario;
alert("Horário selecionado: " + horario);
}

function agendar(){

let nome = document.getElementById("nome").value;
let servico = document.getElementById("servico").value;

if(nome === "" || servico === "" || horarioSelecionado === ""){
alert("Preencha todos os campos");
return;
}

let mensagem = `Olá! Gostaria de agendar um horário.

Nome: ${nome}
Serviço: ${servico}
Horário: ${horarioSelecionado}

Hair by Monica`;

let telefone = "5511999999999";

let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

window.open(url,'_blank');

}
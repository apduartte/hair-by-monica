
```javascript
document.querySelectorAll(".horarios button").forEach(button => {

button.addEventListener("click", () => {

const horario = button.dataset.time

const mensagem = `Olá! Gostaria de agendar um horário às ${horario}.`

const telefone = "5511999999999"

const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`

window.open(url, "_blank")

})

})
```

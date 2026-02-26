document.getElementById("formAgendamento")
.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensagem").innerText =
        "Agendamento realizado com sucesso! 🐾";
});
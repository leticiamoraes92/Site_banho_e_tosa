document.getElementById("formAgendamento")?.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("mensagem").innerText =
        "Agendamento enviado com sucesso! Entraremos em contato 🐾";
});
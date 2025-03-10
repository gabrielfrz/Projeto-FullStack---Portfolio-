document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const responseMessage = document.getElementById("responseMessage");

    try {
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();

        if (response.ok) {
            responseMessage.innerText = "Email enviado com sucesso!";
            responseMessage.style.color = "green";
        } else {
            responseMessage.innerText = "Erro ao enviar email.";
            responseMessage.style.color = "red";
        }
    } catch (error) {
        responseMessage.innerText = "Erro na solicitação.";
        responseMessage.style.color = "red";
    }
});

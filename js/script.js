document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.getElementById("typing");
    const cursorElement = document.querySelector(".cursor");
    const introContainer = document.querySelector(".intro-container");
    const mainContent = document.querySelector(".main-content");
    const footer = document.querySelector(".footer"); // Pegamos o rodapé
    const text = "Gabriel Aragão";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typingElement.innerHTML = text.substring(0, index + 1);
            index++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(() => {
                introContainer.style.opacity = "0";
                setTimeout(() => {
                    introContainer.style.display = "none";
                    document.body.classList.add("show-main");
                    mainContent.style.display = "flex";

                    setTimeout(() => {
                        mainContent.style.opacity = "1";
                        document.body.classList.add("show-footer"); // Ativa a exibição do rodapé corretamente
                    }, 500);
                }, 1000);
            }, 1000);
        }
    }

    setTimeout(typeEffect, 500);
});

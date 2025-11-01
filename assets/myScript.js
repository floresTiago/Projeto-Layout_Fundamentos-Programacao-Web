//Aviso de função indisponível
function mostrarToast() {
    M.toast({ html: '<i class="material-icons">report_problem</i>Funcionalidade indisponível', classes: 'red z-depth-3' });
}

//Fechar navbar responsiva
function fecharSidenav() {
    var elem = document.querySelector('.sidenav');
    var instance = M.Sidenav.getInstance(elem);
    instance.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
});

//Muda contraste
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("botaoMudaCor");
    const navegacao = document.getElementById("navegacao");
    const body = document.getElementById("Body");
    const rodape = document.getElementById("rodape");
    const curve = document.querySelector(".curve");

    const botaoAzul1 = document.getElementById("botaoAzul1");
    const botaoAzul2 = document.getElementById("botaoAzul2");
    const botaoAzul3 = document.getElementById("botaoAzul3");
    const botaoAzul4 = document.getElementById("botaoAzul4");
    const botaoAzul5 = document.getElementById("botaoAzul5");
    const botaoAzul6 = document.getElementById("botaoAzul6");
    const botaoAzul7 = document.getElementById("botaoAzul7");
    const botaoAzul8 = document.getElementById("botaoAzul8");
    const botaoAzul9 = document.getElementById("botaoAzul9");
    const botaoAzul10 = document.getElementById("botaoAzul10");
    const botaoAzul11 = document.getElementById("botaoAzul11");
    const botaoAzul12 = document.getElementById("botaoAzul12");

    const texto1 = document.getElementById("texto1");
    const texto2 = document.getElementById("texto2");
    const texto3 = document.getElementById("texto3");
    const texto4 = document.getElementById("texto4");
    const texto5 = document.getElementById("texto5");

    botao.addEventListener("click", () => {
        botao.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        navegacao.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        body.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        rodape.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        curve.classList.toggle("ativa");
    });

    botao.addEventListener("click", () => {
        botaoAzul1.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul2.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul3.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul4.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul5.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul6.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul7.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul8.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul9.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul10.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul11.classList.toggle("darken-4");
    });
    botao.addEventListener("click", () => {
        botaoAzul12.classList.toggle("darken-4");
    });

    botao.addEventListener("click", () => {
        texto1.classList.toggle("text-darken-4");
    });
    botao.addEventListener("click", () => {
        texto2.classList.toggle("text-darken-4");
    });
    botao.addEventListener("click", () => {
        texto3.classList.toggle("text-darken-4");
    });
    botao.addEventListener("click", () => {
        texto4.classList.toggle("text-darken-4");
    });
    botao.addEventListener("click", () => {
        texto5.classList.toggle("text-darken-4");
    });

});

//Animação de aparecimento no scroll das cards
document.addEventListener("DOMContentLoaded", function() {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-card');
            }
           else {
            entry.target.classList.remove('show-card');
             }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden-card');
    hiddenElements.forEach((el) => observer.observe(el));

});

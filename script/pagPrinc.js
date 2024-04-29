//Fazendo a "conexão" com os botões do HTML
var botao1 = document.getElementById("botao1");
// var botao2 = document.getElementById("botao2");
// var botao3 = document.getElementById("botao3");
// var botao4 = document.getElementById("botao4");
// var botao5 = document.getElementById("botao5");
// var botao6 = document.getElementById("botao6");
// var botao7 = document.getElementById("botao7");

botao1.addEventListener("click", function () {
    let form1 = document.getElementById("form1");

    form1.style.display = "block";
    form1.addEventListener("submit", reservarQuartos);
});

function reservarQuartos(event) {
    event.preventDefault()
    console.log("Função reservarQuartos chamada");
    let inpANome = document.getElementById("inpANome").value;
    let inpAValor = Number(document.getElementById("inpAValor").value);
    let inpADiaria = Number(document.getElementById("inpADiaria").value);
    let inpAQuarto = Number(document.getElementById("inpAQuarto").value);

    //Validar valores
    if (inpAValor > 0 && inpADiaria > 0 && inpAQuarto > 0) {
        let result = inpAValor * inpADiaria;
        document.getElementById("saida1").value = "Resultado: " + result;
    }else {
        document.getElementById("saida1").value = "Valores Inválidos";
    }
}
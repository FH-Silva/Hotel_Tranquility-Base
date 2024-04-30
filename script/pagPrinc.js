//Fazendo a "conexão" com os botões do HTML
var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");
var botao5 = document.getElementById("botao5");
var botao6 = document.getElementById("botao6");

let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("form4");
let form5 = document.getElementById("form5");
let form6 = document.getElementById("form6");

function reservarQuartos(event) {
    event.preventDefault()
    console.log("Função reservarQuartos chamada");
    let inpANome = document.getElementById("inpANome").value;
    let inpAValor = Number(document.getElementById("inpAValor").value);
    let inpADiaria = Number(document.getElementById("inpADiaria").value);
    let inpAQuarto = Number(document.getElementById("inpAQuarto").value);

    //Validar valores
    if (inpAValor > 0 && inpADiaria > 0 && inpADiaria < 31 && inpAQuarto > 0 && inpAQuarto < 21) {
        let result = inpAValor * inpADiaria;
        document.getElementById("saida1").value = "Resultado: R$" + result;
    } else {
        document.getElementById("saida1").value = "Valores Inválidos";
    }
}

function cadastroHospedes(event) {
    event.preventDefault();
    // let inpBValor = Number(document.getElementById("inpBValor").value);
    // let inpBNome = document.getElementById("inpBNome").value;
    // let inpBIdade = Number(document.getElementById("inpBIdade").value);
}

//Reservar Quartos
botao1.addEventListener("click", function () {
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "none";

    form1.addEventListener("submit", reservarQuartos);
});
botao2.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "block";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "none";

    form2.addEventListener("submit", cadastroHospedes);
    document.getElementById("inpBFinaliza").addEventListener("submit", function(){
        alert("OK")
    })
});
botao3.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "block";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "none";

    form1.addEventListener("submit"); //Inserir função
});
botao4.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "block";
    form5.style.display = "none";
    form6.style.display = "none";

    form1.addEventListener("submit"); //Inserir função
});
botao5.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "block";
    form6.style.display = "none";

    form1.addEventListener("submit"); //Inserir função
});
botao5.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "block";

    form1.addEventListener("submit"); //Inserir função
});
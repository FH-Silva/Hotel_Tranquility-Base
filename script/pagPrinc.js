const cadastrados = []; //Para armazenar o nome dos hospedes cadastrados

//Fazendo a seleção com os botões e os formulários do HTML
var reservarQuartos = document.getElementById("botao1");
var cadastroHospedes = document.getElementById("botao2");
var buscaHospedes = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");
var botao5 = document.getElementById("botao5");
var botao6 = document.getElementById("botao6");

var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var form4 = document.getElementById("form4");
var form5 = document.getElementById("form5");
var form6 = document.getElementById("form6");

//Quando clicar em "Reservar Quartos", abre o form e oculta os outros formulários
reservarQuartos.addEventListener("click", function () {
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "none";

    //Quando clicar enviar os valores, a função é executada
    form1.addEventListener("submit", function (event) {
        event.preventDefault()

        //Pega os valores enviados do formulário
        let inpANome = document.getElementById("inpANome").value;
        let inpAValor = Number(document.getElementById("inpAValor").value);
        let inpADiaria = Number(document.getElementById("inpADiaria").value);
        let inpAQuarto = Number(document.getElementById("inpAQuarto").value);

        //Valida valores
        if (inpAValor > 0 && inpADiaria > 0 && inpADiaria < 31 && inpAQuarto > 0 && inpAQuarto < 21) {
            let result = inpAValor * inpADiaria;
            document.getElementById("saida1").value = "Resultado: R$" + result;
        } else {
            document.getElementById("saida1").value = "Valores Inválidos";
        }
        cadastrados.push(inpANome);
    });
});

//Quando clicar em "Cadastro de Hospedes", abre o form e oculta os outros formulários
cadastroHospedes.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "block";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "none";

    //Arrays para armazenar os valores que serão inseridos
    var gratis = [];
    var meia = [];
    var inteira = [];

    form2.addEventListener("submit", function (event) {
        event.preventDefault();

        //Pega os valores enviados do formulário
        let inpBValor = Number(document.getElementById("inpBValor").value);
        let inpBNome = document.getElementById("inpBNome").value;
        let inpBIdade = Number(document.getElementById("inpBIdade").value);

        //Verifica os valores inseridos
        if (inpBIdade <= 6) {
            gratis.push(inpBIdade);
        } else if (inpBIdade >= 60) {
            meia.push(inpBIdade);
        } else {
            inteira.push(inpBIdade);
        }
        cadastrados.push(inpBNome);

        let result = inpBValor * (inteira.length + meia.length / 2);
        document.getElementById("saida3").value = `Inteira: ${inteira.length}, Meia: ${meia.length}, Grátis: ${gratis.length}`;
        document.getElementById("saida2").value = `Valor total: R$${result}`;
    })
});

//Quando clicar em "Busca de Hospedes", abre o form e oculta os outros formulários
buscaHospedes.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "block";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "none";

    //Lista o nome dos hospedes que foram cadastrados em "Reservar Quartos" e "Cadastros de Hospedes"
    document.getElementById("lista").addEventListener("click", function () {
        alert(cadastrados);
    });

    //Busca o nome do hospede
    form3.addEventListener("submit", function (event) {
        event.preventDefault();

        let inpCNome = document.getElementById("inpCNome").value;
        let achei = cadastrados.indexOf(inpCNome);

        if (achei !== -1) {
            alert(`O hospede ${inpCNome} está cadastrado.`);
        } else {
            alert(`O nome ${inpCNome} não foi encontrado.`);
        }
    });
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
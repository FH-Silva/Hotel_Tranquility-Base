var reservados = []; //Para armazenar os quartos reservados
var hospReservado = []; //Para armazenar o nome dos hospedes reservados
var cadastrados = []; //Para armazenar o nome dos hospedes cadastrados

//Fazendo a seleção com os botões e os formulários do HTML
var reservarQuartos = document.getElementById("botao1");
var cadastroHospedes = document.getElementById("botao2");
var buscaHospedes = document.getElementById("botao3");
var eventos = document.getElementById("botao4");
var abastecimento = document.getElementById("botao5");
var ar = document.getElementById("botao6");
var sair = document.getElementById("botao7");

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

        //Verifica se o quarto já está reservado
        if (reservados.includes(inpAQuarto) == false) {
            reservados.push(inpAQuarto);
            hospReservado.push(inpANome);
            let result = inpAValor * inpADiaria;
            document.getElementById("saida1").value = "Resultado: R$" + result;
        } else {
            document.getElementById("saida1").value = `Quarto ${inpAQuarto} já reservado`
        }
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

    //Busca o nome do hospede
    form3.addEventListener("submit", function (event) {
        event.preventDefault();
        let inpCNome = document.getElementById("inpCNome").value;

        if (cadastrados.includes(inpCNome) == true || hospReservado.includes(inpCNome) == true) {
            document.getElementById("saida14").value = `${inpCNome} já cadastrado.`
        } else {
            document.getElementById("saida14").value = `O hospede não foi encontrado.`;
        }
    });
});

//Lista o nome de todos os hospedes que foram cadastrados em "Reservar Quartos" e "Cadastros de Hospedes"
document.getElementById("lista").addEventListener("click", function (event) {
    event.preventDefault();
    alert(cadastrados + hospReservado);
});

//Quando clicar em "Eventos", abre o form e oculta os outros formulários
eventos.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "block";
    form5.style.display = "none";
    form6.style.display = "none";

    form4.addEventListener("submit", function (event) {
        event.preventDefault();

        //Parte 1: Verifica a quantidade de convidados e indica o melhor auditório para uso
        let convidados = Number(document.getElementById("inpDQuantHosp").value);

        if (convidados <= 150) {
            document.getElementById("saida4").value = "Auditório Laranja";
        } else if (convidados >= 221 && convidados <= 350) {
            document.getElementById("saida4").value = "Auditório Colorado";
        } else {
            document.getElementById("saida4").value = `Laranja, inclua ${220 - convidados} cadeiras`
        }

        //Parte 2: Escolhe o dia e a hora do evento
        let empresa = document.getElementById("inpDNome").value;
        let semana = document.getElementById("inpDSemana").value;
        let hora = document.getElementById("inpDHora").value;

        if (semana == "domingo" || semana == "sabado") {
            if (hora >= 7 && hora <= 15) {
                document.getElementById("saida5").value = `Data: ${semana}, às ${hora}h`;
            } else {
                document.getElementById("saida5").value = "Valores Inválidos"
            }
        } else {
            document.getElementById("saida5").value = `Data: ${semana}, às ${hora}h`;
        }

        //Parte 3: Exibe a quantidade de garçons a serem contratados, com base na quantidade de convidados e tempo de duração do evento
        let duracao = document.getElementById("inpDDuracao").value;
        let qtdGarcons = Math.round(convidados / 12 + duracao / 2);
        document.getElementById("saida6").value = `Contratar: ${qtdGarcons} garçons.`;

        //Parte 4: Exibe a quantidade de alimento necessário para o buffet
        let cafe = convidados * 0.2;
        let agua = convidados * 0.5;
        let salgados = convidados * 7;

        let valorCafe = cafe * 0.8;
        let valorAgua = agua * 0.5;
        let valorSalgado = cafe * 0.34;

        document.getElementById("saida7").value = `Café: ${cafe}litros, R$ ${(valorCafe).toFixed(2)}`;
        document.getElementById("saida8").value = `Água: ${agua}litros, R$ ${(valorAgua).toFixed(2)}`;
        document.getElementById("saida9").value = `Salgados: ${salgados}, R$ ${(valorSalgado).toFixed(2)}`;

        //Confirma o evento ou não?
        let confirmacao = confirm(`Confirmar evento para ${empresa}, ${semana}, às ${hora}h? \nCusto do Buffet: R$ ${(valorCafe + valorAgua + valorSalgado).toFixed(2)} \nCusto dos Garçons: R$ ${qtdGarcons * 10.5}`);
        if (confirmacao == true) {
            alert("Confirmado com sucesso");
        } else {
            alert("Cancelado");
            document.getElementById("saida4").value = "";
            document.getElementById("saida5").value = "";
            document.getElementById("saida6").value = "";
            document.getElementById("saida7").value = "";
            document.getElementById("saida8").value = "";
            document.getElementById("saida9").value = "";
        }
    });
});

//Quando clicar em "Abastecer Carro", abre o form e oculta os outros formulários
abastecimento.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "block";
    form6.style.display = "none";

    form5.addEventListener("submit", function (event) {
        event.preventDefault();

        let alcoolWayne = Number(document.getElementById("inpEAlcool1").value);
        let alcoolStark = Number(document.getElementById("inpEAlcool2").value);
        let gasolinaWayne = Number(document.getElementById("inpEGasolina1").value);
        let gasolinaStark = Number(document.getElementById("inpEGasolina2").value);

        //Verifica, com base nos valores informados, qual o melhor lugar para abastecer o carro do hotel
        if (Math.min(alcoolWayne, alcoolStark, gasolinaWayne, gasolinaStark) === alcoolWayne) {
            document.getElementById("saida10").value = "Álcool do Posto Wayne";
        } else if (Math.min(alcoolStark, alcoolWayne, gasolinaWayne, gasolinaStark) === alcoolStark) {
            document.getElementById("saida10").value = "Álcool do Posto Stark";
        } else if (Math.min(gasolinaWayne, alcoolStark, alcoolWayne, gasolinaStark) === gasolinaWayne) {
            document.getElementById("saida10").value = "Gasolina do Posto Wayne";
        } else if (Math.min(gasolinaStark, gasolinaWayne, alcoolStark, alcoolWayne) === gasolinaStark) {
            document.getElementById("saida10").value = "Gasolina do Posto Stark";
        } else {
            document.getElementById("saida10").value = "Valores Iguais";
        }
    });
});

//Quando clicar em "Ar Condicionado", abre o form e oculta os outros formulários
ar.addEventListener("click", function () {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "block";

    form6.addEventListener("submit", function (event) {
        event.preventDefault();

        let nome = document.getElementById("inpFNome").value;
        let valor = Number(document.getElementById("inpFValor").value);
        let quantidade = Number(document.getElementById("inpFQtd").value);
        let desconto = Number(document.getElementById("inpFDescont").value);
        let qtdDesconto = Number(document.getElementById("inpFQtdDescont").value);

        let valorServico = quantidade * valor; //Calcular o valor do serviço

        //Se a quantidade de aparelhos for maior que a quantidade minima do desconto, será aplicado um desconto de X%
        if (quantidade > qtdDesconto) {
            let valorTotal = valorServico - desconto / 100 * valorServico;
            document.getElementById("saida11").value = `Empresa ${nome}`;
            document.getElementById("saida12").value = `Valor a pagar R$ ${valorTotal}`;
            document.getElementById("saida13").value = `Desconto de ${desconto}%`;
        } else {
            document.getElementById("saida11").value = `Empresa ${nome}`;
            document.getElementById("saida12").value = `Valor a pagar R$ ${valorServico}`;
            document.getElementById("saida13").value = "Sem desconto";
        }
    });
});

//Vai para a tela de login
sair.addEventListener("click", function () {
    window.location.href = "index.html";
});
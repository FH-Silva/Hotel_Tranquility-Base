const hotel = "Tranquility Base Hotel & Casino"

var formEvinado = document.getElementById("enviar");
formEvinado.addEventListener("submit", function (event){
    event.preventDefault(); //Evita o carreagamento padrao
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    
    if (pass == "2678"){
        alert("Bem-vindo ao " + hotel + ", "  + name + ". É um imenso prazer ter você por aqui!");
        window.location.href = "pagPrinc.html";
         
        // let escolha = prompt("1. 2. 3. 4.");
        // switch(escolha){
        //     case "1":
        //         alert("opç 1");
        //         break
        //     case "2":
        //         alert("opç 2");
        //         break
        //     case "3":
        //         alert("opç 3");
        //         break
        //     case "4":
        //         alert("Muito obrigado e até logo, " + name);
        //         break
        //     default:
        //         alert("Nenhuma das opções escolhida.");
        //         break
        // }
    }else{
        alert("Senha incorreta");
    }
});
function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');

    if (!days) {
        alert("Favor informe um dia existente no calendário");
    } else {
        if ((days > 0) && (days <= 30)) {
            let td = calendar.getElementsByTagName('td')[parseInt(days) + 1]; 
            td.style.backgroundColor = color;
        } else {
            alert("Favor informar uma data constante no calendário");
        }
    }

    var elementos = document.querySelectorAll('td');

    var conttadorAzul = 0, conttadorVerde = 0, conttadorRosa = 0, conttadorRoxo = 0;

    for (let i = 0; i < elementos.length; i++) {
        var estilo = window.getComputedStyle(elementos[i]);
        var corEstilo = estilo.backgroundColor;

        // Verificando o valor exato da cor
        console.log('Cor aplicada no td:', corEstilo);

        // Comparando as cores usando um método mais flexível
        if (corEstilo === "rgb(172, 216, 238)") { // lightblue
            conttadorAzul++;
        }
        else if (corEstilo === "rgb(153, 251, 152)") { // palegreen
            conttadorVerde++;
        }
        else if (corEstilo === "rgb(255, 182, 193)") { // lightpink
            conttadorRosa++;
        }
        // Adicionando uma verificação mais abrangente para a cor roxa
        else if (corEstilo.startsWith("rgb(106, 90, 205)")) { // slateblue, com qualquer valor no caso do rgba
            conttadorRoxo++;
        }
    }

    // Exibindo os resultados no console
    console.log("Azul: " + conttadorAzul);
    console.log("Verde: " + conttadorVerde);
    console.log("Rosa: " + conttadorRosa);
    console.log("Roxo: " + conttadorRoxo);
}

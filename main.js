// codigo para tornar calendario interativo usandio funçã declarativa

function colorirDia(){
    // bloco de variavveis
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');

    if(!days){
        alert("Favor informe um dia existente no calendario");
    }else{
        if((days > 0) && (days<30)){
            let td = calendar.getElementsByTagName('td'); 
            td.style.backgroud-color == color;
        }else{
            alert("Favor informar uma data constante no calendario")
        }
    }

    var elementos = document.querySelectorAll('td');

    // conttador ultilizadas

    var conttadorAzul = 0, conttadorVerde = 0, conttadorRosa = 0, conttador = 0;

    // Loop para verificar estilo de cada celula e contar quantas tem cores e quais

    for(let i = 0; i < elementos.length; i++){
        // obten=m o estilo aplicado do elemento atual
        var estilo = window.getComputedStyle(elementos[i]);
        
        // obtem a cor de fundo de fundo atual da celula

        var corEstilo = estilo.backgroundColor;
    }
}
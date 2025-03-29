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

}
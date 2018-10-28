function sommaF(){
    var num1 = Number(document.querySelector("#num1").value);
    var num2 = Number(document.querySelector("#num2").value);
    var somma= num1+num2;
    document.querySelector('#sum').value = somma;
    
}




function sottrazioneF(){
    var num1 = Number(document.querySelector("#num3").value);
    var num2 = Number(document.querySelector("#num4").value);
    var sottrazione= num1-num2;
    document.querySelector('#sot').value = sottrazione;
 
}

function moltiplicazioneF(){
    var num1 = Number(document.querySelector("#num5").value);
    var num2 = Number(document.querySelector("#num6").value);
    var moltiplicazione= num1*num2;
    document.querySelector('#mol').value = moltiplicazione;
 }

function divisioneF(){
    var num1 = Number(document.querySelector("#num7").value);
    var num2 = Number(document.querySelector("#num8").value);
    var divisione= num1/num2;
    document.querySelector('#div').value = divisione;
 
}

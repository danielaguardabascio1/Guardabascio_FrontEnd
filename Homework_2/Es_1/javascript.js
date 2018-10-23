var num1 = 100;
var num2=15;


Somma.addEventListener('clik' , sommaF(num1,num2));
Sottrazione.addEventListener('click' , sottrazioneF(num1, num2));
Moltiplicazione.addEventListener('click' , moltiplicazioneF(num1, num2));
Divisione.addEventListener('click' , divisioneF(num1,num2));

function sommaF(num1 ,num2){
    var somma =num1 + num2;
    document.getElementById('Somma').innerHTML = somma;
    
}

function sottrazioneF(num1, num2){
      var sott =num1 - num2;
    document.getElementById('Sottrazione').innerHTML = sott;

}

function moltiplicazioneF(num1 ,num2){
       var mol =num1 * num2;
    document.getElementById('Moltiplicazione').innerHTML = mol;
}

function divisioneF(num1 ,num2){
      var div =num1 / num2;
    document.getElementById('Divisione').innerHTML = div;

}

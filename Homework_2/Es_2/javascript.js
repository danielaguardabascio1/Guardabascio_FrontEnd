var array=[];

Esponente.addEventListener('clik', Esponenziale());


function Esponenziale() {
    for (var i = 0; i <= 15; i++) {
        var expo =i*i;
        array[i]=expo+'</br>';
    }
}

document.getElementById('Esponente').innerHTML=array;

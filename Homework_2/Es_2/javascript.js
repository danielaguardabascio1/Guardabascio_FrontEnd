var array=[];

Esponente.addEventListener('clik', Esponenziale());


function Esponenziale() {
    for (var i = 0; i <= 16; i++) {
        var expo =i*i;
        if(i<=15)
            array[i]=expo+'</br>';
        else
            array[i]='Fine elaborazione';
    }
}

document.getElementById('Esponente').innerHTML=array;

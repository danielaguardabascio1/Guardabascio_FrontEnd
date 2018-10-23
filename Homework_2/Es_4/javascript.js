var array=[];

function Esponenziale() {
    let num= Number(document.querySelector('#num1').value);
    for (var i = 0; i <num; i++) {
        var expo =i*i;
        if(i<=15)
            array[i]=expo+'</br>';
        else
            array[i]='Fine elaborazione';
    }
    
    document.getElementById('Esponente').innerHTML=array;
    document.getElementById('Esito').innerHTML='Fine Elaborazione';
}



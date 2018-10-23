var array=['Daniela' , 'Giovanni' , 'Pasquale' , 'Michele'];


function verifica() {
    var trovato=false;
    
    let nom= document.querySelector('#nome').value;
    for (var i = 0; i <array.length; i++) {
        if(array[i].toUpperCase() == nom.toUpperCase())
            trovato=true;
    }
    
    if(trovato==true) {
        document.getElementById('result').innerHTML='Utente Abilitato';
    }
        
    else{
         document.getElementById('result').innerHTML='Utente Non Abilitato';}
}



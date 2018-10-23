var colori = Array ('#dd2493','#236e96','#5deb2e','#ff1111');
var myVar;
var go=true;
var n=0;

function onLoad() {    
    if(go==true)
            myVar = window.setInterval(changeBackground, 1500);
}


function changeBackground() {
    if(n>colori.length)
        n=0;
    n++;
    
    document.body.style.background = colori[n];
}



function stop(){
   go=false; 
}

function riavvia(){
    go=true;
     myVar = window.setInterval(changeBackground, 1500);
    console.log(go);
}




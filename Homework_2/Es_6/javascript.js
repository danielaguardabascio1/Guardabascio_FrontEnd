var colori = Array ('#dd2493','#236e96','#5deb2e','#ff1111');
var go=true;
var n=0;
var myVar;

function onLoad() {    
    if(go==true)
        myVar = window.setInterval(changeBackground, 1500);
    
}

function changeBackground() {
    if(n<=colori.length){
    n++;}
    else
        n=0;
    if(go==true)
        document.body.style.background = colori[n];
    
}

function stop(){
  go=false;
}

function riavvia(){
    go=true;
     myVar = window.setInterval(changeBackground, 1500);
   
}




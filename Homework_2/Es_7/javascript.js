function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
        window.alert("hai inserito piu di 5 cifre");
    }

}

capId.limitText;

function validate() {

    var element = document.querySelector("#nomcogn").value;
    var regex = /\d/g;
    if (regex.test(element))
        window.alert("Il campo non puo contenere numeri");

}


function invioDati() {
    let nomCogn = document.querySelector("#nomcogn").value;
    let sex = document.querySelector("#sex").value;
    let ateneo = document.querySelector("#at").value;
    let capid = document.querySelector("#capId").value;
    let lavoratore = document.querySelector("#lavoroId").value;
    let descrizione = document.querySelector("#descLav").value;
    
    console.log("ciao " + nomCogn);
    
    if (nomCogn=='')
        window.alert("Non è stato compuilato il campo nome cognome");
    
    if(sex=='')
        window.alert("Non è stato selezionato il sesso");
    
    if(ateneo=='')
        window.alert("Non è stato selezionato un ateneo");
    
    if(lavoratore!='')
        if(descrizione=='')
                window.alert("Non è stato compilato ilcampo per la descrizioen del lavoro");

}

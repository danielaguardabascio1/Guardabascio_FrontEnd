const $ = require('jquery');

$(document).ready(
    () => {
        $('#CookieId').on('click', () => {
            $('#cookie').hide();
        });

        $('.like').on('click', event => {
            $(event.currentTarget).toggleClass('like_green')
        });



        $.ajax({
            url: 'ajax_file.json',
            method: 'GET',
            success: function (result) {
                var output='';
                for (var i = 0; i < result.length; i++) {
                    output += "<p>" + result[i].text + "</p>";
                }
                $('#Remote').html(output);
            },
            error: function (result) {
                alert('Errore caricamento');
            }

        });
    });



/*
// Funzione per nascondere i coockie
CookieId.addEventListener('click', function () {
    document.getElementById('cookie').style.display = "none";
    document.getElementById('cookie').classList.adfunction doAjax(){
    $.ajax({
    url: 'ajax_file.json',
    method: 'POST',
    data: {key: 'value'},
    success: function(result){
    alert(result);
    }
    
    });
    }
var listArticle= document.getElementsByClassName('like');

for(var i = 0; i<listArticle.length ; i++){
    listArticle[i].addEventListener('click' , function (){
        if(this.classList.contains('like')){
             this.classList.toggle('like_green');
        }
        else { 
        this.classList.toggle('like');
    }
            
    })
}

*/

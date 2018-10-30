const $ = require('jquery');
const Mustache = require('mustache');




function toggleLike (valueCl ,idClass ){
          $.ajax({
            url: '/likebutton',
            method: 'POST',
            contentType: 'application/json',
              dataType: 'json',
            data : JSON.stringify({valueCl:valueCl ,idClass:idClass}),
            success: function (result) {
                
            },
            error: function (result) {
                alert('Errore caricamento');
            }
        });
}


$(document).ajaxComplete(function () {

    $('.like').on('click', event => {
        var valueCl;
        $(event.currentTarget).toggleClass('like_green');
        //var value = $(event.currentTarget).attr("value");
        var idClass = event.currentTarget.parentNode.id;
        var className= event.currentTarget.className;
        
        if (className.indexOf("like_green") >= 0){
            valueCl= "false";
        }
        else {
            valueCl = "true";
        }
        toggleLike(valueCl ,idClass);

    });

    $('#CookieId').on('click', () => {
        $('#cookie').hide();
    });

});




$(document).ready(
    () => {
        $.ajax({
            url: '/articles',
            method: 'GET',
            dataType: 'json',
            success: function (result) {
                var template = $('#template').html();
                var rendered = Mustache.render(template, result);
                $('#articoli').html(rendered);
            },
            error: function (result) {
                alert('Errore caricamento');
            }
        });

    });

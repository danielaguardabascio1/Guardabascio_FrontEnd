const $ = require('jquery');

$(document).ready(
    () => {
        $('#CookieId').on('click', () => {
            $('#cookie').hide();
        });

        $('.like').on('click', event => {
            $(event.currentTarget).toggleClass('like_green')
        });


/*
        $.ajax({
            url: 'ajax_file.json',
            method: 'GET',
            success: function (result) {
                var output='';
                console.log('ciaoo');
                //for (var i = 0; i < result.articolo.length; i++) {
                $.each(result.articolo , function(key , value)){
                console.log('ciaooo for'); 
                    // output += "<p>" + result[i].articlo + "</p>";
                }
                //$('#Remote').html(output);
            },
            error: function (result) {
                alert('Errore caricamento');
            }

        });
        */
    });
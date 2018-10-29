const $ = require('jquery');
const Mustache = require('mustache');


$(document).ajaxComplete(function () {
    $('.like').on('click', event => {
        $(event.currentTarget).toggleClass('like_green')
    });

    $('#CookieId').on('click', () => {
        $('#cookie').hide();
    });

});


$(document).ready(
() => {
    $.ajax({
                url: '/articles.json',
                method: 'GET',
                success: function (result) {
                    var template = $('#template').html();
                    var rendered = Mustache.render(template, result);
                    $('#articoli').html(rendered);
                });
        },
        error: function (result) {
            alert('Errore caricamento');
        }

});

});

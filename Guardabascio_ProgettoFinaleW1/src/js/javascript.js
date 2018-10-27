const $ = require('jquery');
const Mustache = require('mustache');


$(document).ajaxComplete(function() {
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
            url: 'articles.json',
            method: 'GET',
            success: function (result) {
                var output = '';
                $.each(result.articles, function (key, value) {
                    var template =
                        "<article class='style_article col-xs-12 col-sm-6 col-md-4 col-lg-4'><h1 class='title_article'>{{title}}</h1> <img src='{{image}}' width='100%' height='auto' class='img-fluid' alt='Responsive image'> <span class='tech btn btn-xs' role='button'>{{tech}}</span><p> {{text}}</p><script type='button' class='like btn btn-primary' role='button'>{{like}}</script></article>";

                    var html = Mustache.to_html(template, result.articles[key]);
                    output += html;

                });

                $('#articoli').html(output);
            },
            error: function (result) {
                alert('Errore caricamento');
            }

        });

    });




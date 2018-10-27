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

const $ = require('jquery');

$(document).ready(
    () => {
        $('#CookieId').on('click', () => {
            $('#cookie').hide();
        });

        $('.like').on('click', event => {
            $(event.currentTarget).toggleClass('like_green')
        });
        
        });
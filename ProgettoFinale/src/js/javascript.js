const $ = require('jquery');
const Mustache = require('mustache');

$(document).ready(function () {

    $.ajax({
        url: '/articles',
        method: 'GET',
        dataType: 'json',
        success: function (result) {
            var template = $('#template').html();
            var rendered = Mustache.render(template, result);
            $('#articoli').html(rendered);
        },
        error: function () {
            console.log(result);
            alert('errore');
        }

    });

});

$('#c').load('page2-cr.html');

$('#CookieId').on('click', () => {
    $('#cookie').hide();
});

$('#lav1').on('click', () => {
    $('#c').load('page2-cr.html');
});

$('#lav2').on('click', () => {
    $('#c').load('page2-ad.html');
});
$('#lav3').on('click', () => {
    $('#c').load('page2-rs.html');
});

$(".nav-tabs a").click(function () {
    $(this).tab('show');
});

$(".nav-tabs a").click(function () {
    $(this).tab('show');
});


/* App.js */

'use strict';

/* global $ */

$(function () {

    var a = $('#a');
    var b = $('#b');
    var resultado = $('#resultado');

    $('form').on('click', 'button', function (event) {
        event.preventDefault();
        resultado.val(window[event.target.id](parseFloat(a.val()), parseFloat(b.val())));
    });

});
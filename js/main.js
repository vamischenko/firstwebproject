(function ($) {
    'use strict';

    $(function () {
        $('#phone').mask('8(999) 999-9999');

        $('#demoForm').on('submit', function (e) {
            e.preventDefault();
            window.alert('Данные верны и отправлены');
        });
    });
}(jQuery));

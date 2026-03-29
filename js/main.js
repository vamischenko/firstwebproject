(function ($) {
    'use strict';

    var PHONE_COMPLETE = /^8\(\d{3}\) \d{3}-\d{4}$/;

    function validatePhone() {
        var el = document.getElementById('phone');
        if (!el) {
            return;
        }
        var v = el.value;
        if (PHONE_COMPLETE.test(v)) {
            el.setCustomValidity('');
        } else {
            el.setCustomValidity('Введите полный номер в формате 8(999) 999-9999');
        }
    }

    $(function () {
        var $phone = $('#phone');
        $phone.mask('8(999) 999-9999');
        $phone.on('input blur', validatePhone);
        validatePhone();

        $('#demoForm').on('submit', function (e) {
            e.preventDefault();
            validatePhone();
            if (!this.checkValidity()) {
                this.reportValidity();
                return;
            }
            window.alert('Данные верны и отправлены');
        });
    });
}(jQuery));

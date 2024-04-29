// @codekit-prepend "jquery.cookie.js"
// @codekit-prepend "header.js"
// @codekit-prepend "util.js"
// @codekit-prepend "collapse.js"
// @codekit-prepend "dropdown.js"
// @codekit-prepend "megamenu.js"
// @codekit-prepend "submit-form.js"
$(function () { 
    $('.lp__navbar_toggle').on('click', function (e) {
        var menuItem = $( e.currentTarget );

        if (menuItem.attr( 'aria-label') === 'menu') {
            $(this).attr( 'aria-label', 'close menu');
        } else {
            $(this).attr( 'aria-label', 'menu');
        }
    });
});
$(document).ready(function() {
   

    /* mobile menu */
    $('.burger').click(function() {
        $('.menu').toggle(500);
        $(this).toggleClass('close');
    });
});
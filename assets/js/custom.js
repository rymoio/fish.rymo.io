/* ==========================================================================
   Override theme methods
   ========================================================================== */

$(document).ready(function() {

    // init smooth scroll
    $("a").smoothScroll({offset: -90, exclude: ['.scroll-to-top']});

    // to top
    $('.scroll-to-top').smoothScroll({scrollTarget: 'body'});

});

$(document).scroll(function() {
    // show to top only after scrolling
    var y = $(this).scrollTop();
    if (y > 400) {
        $('.page__scroll-to-top').fadeIn();
    } else {
        $('.page__scroll-to-top').fadeOut();
    }
});
// Scroll Nav
jQuery(".m1").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec1").offset().top
    }, 400);
});

jQuery(".m2").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec4").offset().top
    }, 400);
});

jQuery(".m3").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec5").offset().top
    }, 400);
});

jQuery(".m4").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec6").offset().top
    }, 400);
});

jQuery(".m5").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec9").offset().top
    }, 400);
});

jQuery(".m5").click(function () {
    jQuery('html, body').animate({
        scrollTop: jQuery(".sec9").offset().top
    }, 400);
});

jQuery('#mobile-menu li').click(function () {
    jQuery('#burger-menu').click();
});

// Burger Menu


var viewportWidth = $(window).width();

if (viewportWidth < 768) {
    $('.sec5 .card').bxSlider({
        minSlides: 1,
        maxSlides: 2,
        slideWidth: 292,
        moveSlides: 1,
        pager: false,
        infiniteLoop: false,
        controls: false
    });
    $('.mob_slider').bxSlider({
        minSlides: 1,
        maxSlides: 2,
        slideWidth: 292,
        moveSlides: 1,
        pager: false,
        infiniteLoop: false,
        controls: false
    });
    $('.mob2_slider').bxSlider({
        minSlides: 1,
        maxSlides: 2,
        slideWidth: 292,
        moveSlides: 1,
        pager: false,
        infiniteLoop: false,
        controls: false
    });
};






$(document).ready(function() {
    $('.bxSlider').bxSlider();
});
var burgerCtr = document.querySelector("#burger-menu");
var menuCtr = document.querySelector("#mobile-menu");
burgerCtr.addEventListener("click", function() {
    this.classList.toggle("active");
    menuCtr.classList.toggle("show_mobile_menu");
});

// Slick Slider

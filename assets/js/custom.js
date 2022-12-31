jQuery(function ($) {
    'use strict';
    $('.banner-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        dots: false,
        nav:false,
    })
 });
 $(document).ready(function(){
    $('.about-img').hide().fadeIn(1500);
});
 
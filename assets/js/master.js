/*
*
* JS Script
*/

(function ($) {
    "use strict";

    $(document).ready(function () {

        // Spinner
        var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();

        // Initiate WOW JS
        new WOW().init();

        // Sticky Navbar + Back To Top Button (single scroll listener)
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 300) {
                $('.sticky-top').addClass('shadow-sm').css('top', '0px');
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
                $('.back-to-top').fadeOut('slow');
            }
        });

        // Back to Top Button click event
        $('.back-to-top').on("click", function () {
            $('html, body').animate({ scrollTop: 0 }, 100, 'easeInOutExpo');
            return false;
        });

        // Facts counter
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });

        // Header carousel
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            dotsData: true,
        });

        // Testimonials carousel
        $('.testimonial-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            dotsData: true,
        });

        // Newsletter Form Submit
        $("#newsletterForm").on("submit", function (event) {
            event.preventDefault();

            const email = $('#emailInput').val().trim();
            const messageBox = $('#successMessage');

            if (email !== '') {
                messageBox
                    .removeClass('d-none alert-danger')
                    .addClass('alert-success')
                    .text('✅ Signup successful!');
            } else {
                messageBox
                    .removeClass('d-none alert-success')
                    .addClass('alert-danger')
                    .text('⚠️ Please enter a valid email.');
            }
        });

    });

})(jQuery);
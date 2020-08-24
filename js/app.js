$(document).ready(function () {
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.nav-trigger').click(function () {
        $('.site-content-wrapper').toggleClass('scaled');
    })
});
// JavaScript source code
$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        waitForAnimate: false,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1740,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
$(() => {

    $('.advantages_slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        infinite: true,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false                
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
    });


    $('header .btn').on('click', function() {
        let href = $(this).attr('href');    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 870,  
            easing: "linear" 
        });
    
        return false;
    });





})
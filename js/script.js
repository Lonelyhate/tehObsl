$(document).ready(function(){


let scrollPos = $(window).scrollTop();

$(window).on("scroll", function(){
scrollPos = $(this).scrollTop();
});



$("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    
    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;
    let nav = $("#nav");
     nav.removeClass("show");
    
    $("html, body").animate({
    scrollTop: elementOffset - 65
    });
    });



    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
         slidesToScroll: 1,
         variableWidth: true,
         asNavFor: ".sliderbig, .sliderfour" ,
    });
    $('.sliderbig').slick({
        infinite: true,
         variableWidth: true,
         arrows: false,
         asNavFor: ".slider",
    });
    $('.sliderfour').slick({
        infinite: true,
         variableWidth: true,
         arrows: false,
         asNavFor: ".sliderbig, .slider",
    });

    $('.slidertwo').slick({
        infinite: true,
        slidesToShow: 1,
         slidesToScroll: 1,
         variableWidth: true,
         arrows: false
    });
    


    new Swiper('.swiper-container',{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        
        coverflowEffect: {
            rotate: 0,
            stretch: 19,
            depth: 290,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            500: {
                
                slidesPerView: 3,
            }
        },
        
    });
    
});


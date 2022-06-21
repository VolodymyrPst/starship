$(function(){
    $('.slider__box').slick({
        nextArrow:'<img class="slider__arrow slider__arrow-left" src="images/Arrow 2.svg" alt="arrow-left">',
        prevArrow:'<img class="slider__arrow slider__arrow-right" src="images/Arrow 1.svg" alt="arrow-left">',
        responsive: [            
            {
              breakpoint: 500,
              settings: {
              arrows:false
              }
            }
        ]
    });

    $('.menu-btn').on('click', function(){
        $('.menu__list').toggleClass('active');
    })
});
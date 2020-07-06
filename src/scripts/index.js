window.onload = function() {

    $('.js-category-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });

    $(document).on('click','.js-select-city', function(e){
        e.stopPropagation();
        $('.js-select-city-baloon').addClass('active');
    });

    $(document).on('click','.js-baloon-close', function(e){
        e.preventDefault();
        $('.js-select-city-baloon').removeClass('active');
    });
    
    $(document).on('click', function(e){
        var element = $('.js-select-city-baloon');
        if (element.has(e.target).length === 0){
            element.removeClass('active');
        }
    });

    $(document).on('click','.js-cart-mini', function(e){
        e.stopPropagation();
        $('.js-cart-mini').addClass('open');
    });
    $(document).on('click','.js-cart-mini-close', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.js-cart-mini').removeClass('open');
    });

    $(document).on('click', function(e){
        var element = $('.js-cart-mini');
        if (element.has(e.target).length === 0){
            element.removeClass('open');
        }
    });
    
    $(document).on('click','.js-minus', function(e){
        var count = parseInt($(this).siblings('.js-input').val());
        if (count==1){
            $(this).parents('.js-category-item').removeClass('in-cart');
        }
        if (count > 0){
            $(this).siblings('.js-input').val(count-1);
        }
    });
    $(document).on('click','.js-plus', function(e){
        var count = parseInt($(this).siblings('.js-input').val());
        var max = parseInt($(this).siblings('.js-input').data('max'));
        if (count==0){
            $(this).parents('.js-category-item').addClass('in-cart');
        }
        if (count < max){
            $(this).siblings('.js-input').val(count+1);
        }
    });
    $(document).on('click','.js-header-search', function(e){
        e.stopPropagation();
        $(this).addClass('open');
        $('.js-header-cart').addClass('mini');
    });

    $(document).on('click', function(e){
        var element = $('.js-header-search');
        if (element.has(e.target).length === 0){
            element.removeClass('open');
            $('.js-header-cart').removeClass('mini');
        }
    });

    $(document).on('click','.js-aside', function(e){
        e.stopPropagation();
        $(this).addClass('open');
        $('.popup-background').addClass('open');
    });

    $(document).on('click', function(e){
        var element = $('.js-aside');
        if (element.has(e.target).length === 0){
            element.removeClass('open');
            $('.popup-background').removeClass('open');;
        }
    });

    $(document).on('click','.js-aside.open .js-aside-item', function(e){
        $('.js-aside-item').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click','.js-category-title', function(e){
        $(this).parents('.js-category').toggleClass('open');
    });

    $(document).on('click','.js-cart-mini-mobile', function(e){
        $('.js-cart-mini-mobile-popup').removeClass('closed');
    });

    $(document).on('click','.js-cart-mini-mobile-close', function(e){
        $(this).parents('.js-cart-mini-mobile-popup').addClass('closed');
    });

    
};
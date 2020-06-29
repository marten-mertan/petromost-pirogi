window.onload = function() {
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

};
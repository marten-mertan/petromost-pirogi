/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready(function() {

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
    
    $(document).mousedown(function (e){
        var element = $('.js-select-city-baloon');
        var parent = $('.header-top-address');
        if (!element.is(e.target) && element.has(e.target).length === 0 && parent.has(e.target).length === 0){
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

    
    if ($('.js-custom-scroll').length){
        window.dima = baron({
            root: '.js-custom-scroll',
            scroller: '.baron__scroller',
            bar: '.baron__bar'
        }).autoUpdate(); 
    }

    function cartScroll() {
        if (asideWrapper == null) {
            asideWrapper = document.createElement('div');
            asideWrapper.style.cssText = 'box-sizing: border-box; width: ' + asideCart.offsetWidth + 'px;';
            asideCart.insertBefore(asideWrapper, asideCart.firstChild);
            var l = asideCart.childNodes.length;
            for (var i = 1; i < l; i++) {
                asideWrapper.appendChild(asideCart.childNodes[1]);
            }
            asideCart.style.height = asideWrapper.getBoundingClientRect().height + 'px';
        }
        var Ra = asideCart.getBoundingClientRect(),
            R = Math.round(Ra.top + asideWrapper.getBoundingClientRect().height - document.querySelector('.main').getBoundingClientRect().bottom);
        if ((Ra.top - P) <= 0 && window.innerWidth>1024) {
            if ((Ra.top - P) <= R) {
                asideWrapper.className = 'stop';
                asideWrapper.style.top = - R +'px';
            } else {
                asideWrapper.className = 'sticky';
                asideWrapper.style.top = P + 'px';
            }
        } else {
            asideWrapper.className = '';
            asideWrapper.style.top = '';
        }
        window.addEventListener('resize', function() {
            asideCart.children[0].style.width = getComputedStyle(asideCart, '').width;
            if (window.innerWidth<=1024){
                asideWrapper.className = '';
                asideWrapper.style.top = '';
                asideCart.style.height = 'auto';
            }
        }, false);
    }

    if ($('.js-aside').length){
        var asideCart = document.querySelector('.js-aside'), 
            asideWrapper = null, 
            P = 0;
        window.addEventListener('scroll', cartScroll, false);
        document.body.addEventListener('scroll', cartScroll, false);
    }
    
    $(document).on('click','.js-menu-mobile', function(e){
        $('.js-menu-mobile-popup').removeClass('closed');
    });

    $(document).on('click','.js-menu-mobile-close', function(e){
        $(this).parents('.js-menu-mobile-popup').addClass('closed');
    });

    $(document).on('click','.js-menu-filter-item', function(e){
        $(this).parents('.js-menu-mobile-popup').addClass('closed');
    });

    // 100vh на мобилках
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    $(document).on('click','.js-address-radio', function(e){
        $('.js-address-radio').removeClass('active');
        $(this).addClass('active');
    });
});

/***/ })
/******/ ]);
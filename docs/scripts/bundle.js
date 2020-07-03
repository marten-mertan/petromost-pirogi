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

window.onload = function() {

    $('.js-category-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true
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

/***/ })
/******/ ]);
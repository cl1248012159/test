/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	jQuery(document).ready(function(){

	    //头部－上下滚动显示欢迎语和店内活动。
	    function Marquee(){
	        if(demo2.offsetTop-demo.scrollTop<=0)
	            demo.scrollTop-=demo1.offsetHeight
	        else{
	            demo.scrollTop++
	        }
	    }
	    var speed=100;
	    demo2.innerHTML=demo1.innerHTML
	    var MyMar=setInterval(Marquee,speed)
	    demo.onmouseover=function() {clearInterval(MyMar)}
	    demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}

	    //home - home_banners_1
	    $('.home_banners_1').each(function() {
	        if($('.item', this).length > 1) {
	            $(this).owlCarousel({
	                loop: true,
	                nav: false,
	                items: 1,
	                autoplay: true,
	                autoplayTimeout: 5000
	            });
	        }
	    });


	    //home - customers_show_photo
	    $('.customers_show_photo').each(function() {
	        if($('.item', this).length > 1) {
	            $(this).owlCarousel({
	                loop: true,
	                nav: true,
	                items: 4,
	                dots:false,
	                margin:15
	            });
	        }
	    });
	});

/***/ }
/******/ ]);
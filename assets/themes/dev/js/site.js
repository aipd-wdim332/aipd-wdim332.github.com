/*
           _      _       _                      _   _
          | |    (_)     | |                    | | (_)
 _ __   __| |_  ___ _ __ | |_ ___ _ __ __ _  ___| |_ ___   _____
| '_ \ / _` \ \/ / | '_ \| __/ _ \ '__/ _` |/ __| __| \ \ / / _ \
| |_) | (_| |>  <| | | | | ||  __/ | | (_| | (__| |_| |\ V /  __/
| .__/ \__,_/_/\_\_|_| |_|\__\___|_|  \__,_|\___|\__|_| \_/ \___|
| |
|_|

Site: PDX Interactive
Author: AIPD WDIM332

Contributors:
  Tory Adams
  Nathaniel Cagle
  Tyler Gerig
  Nate Goldman
  Sean Harvey
  Jeff Hogan
  Jake Love

Dependencies:
  jQuery        /js/libs/jquery.min.js
  Underscore    /js/libs/underscore.min.js
  Helpers       /js/helpers.js

*/

// wrap JS in an IIFE
// (http://benalman.com/news/2010/11/immediately-invoked-function-expression)
(function(window,$,undefined){

  // keep site functions namespaced
  var site = {};

  // declare any shared variables here
  var example = '';

  // static DOM references
  var $header, $nav, $container, $footer;

  // example DOM caching function
  site.cacheStaticElements = function(){
    $header    = $('header');
    $nav       = $header.find('nav');
    $container = $('.container');
    $footer    = $('footer');
  };

  // site initializer
  site.init = function(){
    // call cache function
    // site.cacheStaticElements();

    // get fancy
    // $nav.find('li:nth-child(even)').css('background-color','rgba(0,0,0,.1)');

    // see helpers.js for log usage
    // log('site.js loaded');
  };

  // initialize site JS when document is ready
  $(site.init);

})(window,jQuery);

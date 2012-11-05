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
  jQuery 1.8.2

*/

// wrap JS in an IIFE
// (http://benalman.com/news/2010/11/immediately-invoked-function-expression)
(function(window,$,undefined){

  // keep site functions namespaced
  var site = {};

  // declare any shared variables here
  // var example = '';

  // static DOM references
  var $rsvp;

  // example DOM caching function
  site.cacheStaticElements = function(){
    $rsvp = $('.rsvp-form');
  };

  // site initializer
  site.init = function(){
    // call cache function
    site.cacheStaticElements();

    if (getParameterByName('rsvp') == 'success') {
      $rsvp.find('#mc_embed_signup').hide().end()
        .find('.success').show();
    }
    else if (getParameterByName('rsvp') == 'pending') {
      $rsvp.find('#mc_embed_signup').hide().end()
        .find('.pending').show();
    };
  };

  // private functions

  function getParameterByName(name){
    var name    = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")
      , regex   = new RegExp("[\\?&]" + name + "=([^&#]*)")
      , results = regex.exec(window.location.search);

    if (results == null) return false;
    else return decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  // initialize site JS when document is ready
  $(site.init);

})(window,jQuery);

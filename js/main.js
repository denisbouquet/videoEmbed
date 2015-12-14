// Avoid `console` errors in browsers that lack a console.
(function(){for(var a,e=function(){},b="assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "),c=b.length,d=window.console=window.console||{};c--;)a=b[c],d[a]||(d[a]=e)})();


// Site js object
var Site;

(function ($) {
  'use strict'; 
  
  Site = {
    /**
     * Tabs for each product on tactile device
     *
     */
    init: function (elt) {

      this.videoEmbedOnClick();
      
    },
    videoEmbedOnClick: function(){
      // click to show video
      var videoCode = $('.videoEmbed .videoWrapper').html();
      var videoIsPlaying = false;

      // empty video player
      $('.videoEmbed .videoWrapper').html('');

      $('.videoCTA').on('click', function(e){
        e.stopPropagation();

        if(!videoIsPlaying) {
          $(this).parent().find('.videoWrapper').html(videoCode);
          $(this).parent().find('.video-player').show();
          $(this).hide();
          videoIsPlaying = true;
        }
      });

      // click outside of the video id needed
      $('body').on('click', function(e){
        e.stopPropagation();

        if(videoIsPlaying) {
          $('.videoWrapper').html('');
          $('.video-player').hide();
          $('.videoCTA').show();
          videoIsPlaying = false;
        }
      });
    }
  };

  // call init function
  window.onload = function(){ Site.init(); }

})(jQuery);

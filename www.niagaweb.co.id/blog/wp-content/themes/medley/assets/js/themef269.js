( function( $ ) {
  
    /* Add class on scroll */  
  $(window).on("scroll", function() {
      //from top is the amount of pixels to scroll from top before adding class
      var fromTop = $(window).scrollTop();
      $(".sticky-header").toggleClass("scrolled-down", (fromTop > 100));
  });

  /* Progress */  
  window.onscroll = function() {prFunction()};
  function prFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  /* Search */    
  $(".search-icon").click(function() {
      $(".wpbsearchform").toggle( "slow" );
  });

   /* Internet Explorer for object fit cover */    
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    jQuery('.card-style2.wows-post .wows-post-featured-image img, .card-style1 .wows-post-featured-image img, .card-style3 .wows-post-featured-image img').each(function(){
        var t = jQuery(this),
            s = 'url(' + t.attr('src') + ')',
            p = t.parent(),
            d = jQuery('<div></div>');

        p.append(d);
        d.css({
            'height'            : '400px',
            'background-size'       : 'cover',
            'background-repeat'     : 'no-repeat',
            'background-position'   : '50% 20%',
            'background-image'      : s
        });
        t.hide();
    });
  }

} )( jQuery );


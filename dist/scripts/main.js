function autoPlayVideo(o,e,n){"use strict";$("#videoContainer").html('<iframe width="'+e+'" height="'+n+'" src="https://www.youtube.com/embed/'+o+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>')}if(function(o,e){o.fn.inViewport=function(n){return this.each(function(i,t){function a(){var e=o(this).height(),i=t.getBoundingClientRect(),a=i.top,l=i.bottom;return n.call(t,Math.max(0,a>0?e-a:l<e?l:e))}a(),o(e).on("resize scroll",a)})}}(jQuery,window),$(window).on("load",function(o){$('a[href^="#"]:not([role="tab"]').on("click",function(o){o.preventDefault();var e=this.hash,n=$(e);n.length>0&&$("html, body").stop().animate({scrollTop:n.offset().top-120},900,"swing",function(){window.location.hash=e})})}),$("#introvid").length){var scrollTrigger=600,backToTop=function(){$(window).scrollTop();console.log("scrolling ",$(window).scrollTop(),$(document).height()),$(window).scrollTop()>=400&&$(window).scrollTop()<=$(document).height()-1e3?$("#introvid").addClass("show"):$("#introvid").removeClass("show")};backToTop(),$(window).on("scroll",function(){backToTop()})}$(".ani").inViewport(function(o){o&&$(this).addClass("animated")}),$(".shrinkable").readmore({speed:75,collapsedHeight:195,lessLink:'<a href="#" class="c-feature__link">read less</a>',moreLink:'<a href="#" class="c-feature__link">read more</a>'}),jQuery("a.introVid").click(function(){autoPlayVideo("LzN3WPeIhtY","850","500")}),jQuery("a.introVid-fixed").click(function(){autoPlayVideo("LzN3WPeIhtY","850","500")});
//# sourceMappingURL=main.js.map

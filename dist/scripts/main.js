function autoPlayVideo(o,e,i){"use strict";$("#videoContainer").html('<iframe width="'+e+'" height="'+i+'" src="https://www.youtube.com/embed/'+o+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>')}if(function(o,e){o.fn.inViewport=function(i){return this.each(function(n,t){function r(){var e=o(this).height(),n=t.getBoundingClientRect(),r=n.top,l=n.bottom;return i.call(t,Math.max(0,r>0?e-r:l<e?l:e))}r(),o(e).on("resize scroll",r)})}}(jQuery,window),$(window).on("load",function(o){$('a[href^="#"]:not([role="tab"]').on("click",function(o){o.preventDefault();var e=this.hash,i=$(e);i.length>0&&$("html, body").stop().animate({scrollTop:i.offset().top-120},900,"swing",function(){window.location.hash=e})})}),$("#introvid-popup").length){$("#introvid-popup").click(function(){$("#explainervideo-popup").modal("show"),$("#explainervideo-popup iframe").attr("src","https://www.youtube.com/embed/U30Yx4H3ctM?wmode=transparent&rel=0&autoplay=1")}),$("#explainervideo-popup").on("hidden.bs.modal",function(){$("#explainervideo-popup iframe").removeAttr("src")});var scrollTrigger=600,backToTop=function(){$(window).scrollTop();console.log("scrolling ",$(window).scrollTop(),$(document).height()),$(window).scrollTop()>=400&&$(window).scrollTop()<=$(document).height()-1e3?$("#introvid-popup").addClass("show"):$("#introvid-popup").removeClass("show")};backToTop(),$(window).on("scroll",function(){backToTop()})}if($("#introvid").length){var scrollTrigger=600,backToTop=function(){$(window).scrollTop();console.log("scrolling ",$(window).scrollTop(),$(document).height()),$(window).scrollTop()>=400&&$(window).scrollTop()<=$(document).height()-1e3?$("#introvid").addClass("show"):$("#introvid").removeClass("show")};backToTop(),$(window).on("scroll",function(){backToTop()})}$(".ani").inViewport(function(o){o&&$(this).addClass("animated")}),$(".shrinkable").readmore({speed:75,collapsedHeight:195,lessLink:'<a href="#" class="c-feature__link">read less</a>',moreLink:'<a href="#" class="c-feature__link">read more</a>'}),jQuery("a.introVid").click(function(){autoPlayVideo("U30Yx4H3ctM","850","483")}),jQuery("a.introVid-fixed").click(function(){autoPlayVideo("U30Yx4H3ctM","850","483")});
//# sourceMappingURL=main.js.map

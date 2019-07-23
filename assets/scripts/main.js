;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));



$(".ani").inViewport(function(px){
    if(px) $(this).addClass("animated") ;
});


$('.shrinkable').readmore({ 
    speed: 75, 
    collapsedHeight: 195,
    lessLink: '<a href="#" class="c-feature__link">read less</a>',
    moreLink: '<a href="#" class="c-feature__link">read more</a>'
});
 
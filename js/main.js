//SCROLL ABOUT
var about = document.getElementById("about");
about.addEventListener("mouseover", myFunction);

function myFunction() {
    var aboutlist = document.getElementById('about-list');
    aboutlist.style.display = "block";
}
//
$(document).ready(function (){

    /*
    **SCROLL HANDLER
  */
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 1200, 'swing', function () {
        window.location.hash = target;
    });
  });

  function togglescroll() {
    $('body').on('touchstart', function(e) {
      if ($('body').hasClass('noscroll')) {
        e.preventDefault();
      }
    });
  }togglescroll();
    
      $(".icon").click(function() {
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $("body").toggleClass("noscroll");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
      });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $(".mobilenav").fadeOut(500);
      $(".top-menu").removeClass("top-animate");
      $("body").removeClass("noscroll");
      $(".mid-menu").removeClass("mid-animate");
      $(".bottom-menu").removeClass("bottom-animate");
    }
  });

  /* **Features Images
    This changes the images depence the feature with hover
  */
  function changeFeatures(){
    var pos = "";
    var img = $(".phoneFeatures");
    $(".img-feature").hover(function(){
      pos = $(this).attr("id");
      var contentImg = '<img class="feature-phone" src="img/feature-img/'+pos+'.png">';
      img.html(contentImg);      
      });
    
    }); 
    
  }changeFeatures();

});

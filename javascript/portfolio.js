/*---Navi kutsut ---*/

$("#projectslink").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});

$("#customerslink2").click(function() {
    $('html, body').animate({
        scrollTop: $("#timeline").offset().top
    }, 1000);
});

$("#methodlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#method").offset().top
    }, 1000);
});

$("#customerslink").click(function() {
    $('html, body').animate({
        scrollTop: $("#customers").offset().top
    }, 1000);
});

$("#contactlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$("#timelinelink").click(function() {
    $('html, body').animate({
        scrollTop: $("#timeline").offset().top
    }, 1000);
});

$("#aboutlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#projectslink2").click(function() {
    $('html, body').animate({
        scrollTop: $("#timeline").offset().top
    }, 1000);
});

$("#aboutlink2").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

/*---projektikutsut---*/

$("#thermal").click(function() {
    $('html, body').animate({
        scrollTop: $("#thermal").offset().top
    }, 200);
});

$("#thermal").one("click",function(){
  $('.thermal-project').load("thermal.html", function(){
  
      $(".up1").click(function() {
        $('#thermal-project').toggle();
      });
      $("#thermal").click(function(){
        $('.thermal-project').toggle();
      });   
    });
});

$("#kaava").click(function() {
    $('html, body').animate({
        scrollTop: $("#kaava").offset().top
    }, 200);
});

$("#kaava").one("click",function(){
  $('.kaava-project').load("kaava.html", function(){
  
      $(".up1").click(function() {
        $('#kaava-project').toggle();
      });
      $("#kaava").click(function(){
        $('.kaava-project').toggle();
      });   
    });
});


$("#gaze").click(function() {
    $('html, body').animate({
        scrollTop: $("#gaze").offset().top
    }, 200);
});

$("#gaze").one("click",function(){
  $('.gaze-project').load("gaze.html", function(){
  
      $(".up2").click(function() {
        $('.gaze-project').toggle();
      });
      $("#gaze").click(function(){
        $('.gaze-project').toggle();
      });   
    });
});


$("#lightguide").click(function() {
    $('html, body').animate({
        scrollTop: $("#lightguide").offset().top
    }, 200);
});

$("#lightguide").one("click",function(){
  $('.light-project').load("light-guide.html", function(){
  
      $(".up3").click(function() {
        $('.light-project').toggle();
      });
      $("#lightguide").click(function(){
        $('.light-project').toggle();
      });   
    });
});


$("#woneapp").click(function() {
    $('html, body').animate({
        scrollTop: $("#woneapp").offset().top
    }, 200);
});

$("#woneapp").one("click",function(){
  $('.wone-project').load("woneapp.html", function(){
  
      $(".up4").click(function() {
        $('.wone-project').toggle();
      });
      $("#woneapp").click(function(){
        $('.wone-project').toggle();
      });   
    });
});


$("#libraryeva").click(function() {
    $('html, body').animate({
        scrollTop: $("#libraryeva").offset().top
    }, 200);
});

$("#libraryeva").one("click",function(){
  $('.library-project').load("library.html", function(){
  
      $(".up5").click(function() {
        $('.library-project').toggle();
      });
      $("#libraryeva").click(function(){
        $('.library-project').toggle();
      });   
    });
});

$("#fleet-manage").click(function() {
    $('html, body').animate({
        scrollTop: $("#fleet-manage").offset().top
    }, 200);
});

$("#fleet-manage").one("click",function(){
  $('.library-project').load("fleet.html", function(){
  
      $(".up5").click(function() {
        $('.fleet-project').toggle();
      });
      $("#fleet-manage").click(function(){
        $('.fleet-project').toggle();
      });   
    });
});

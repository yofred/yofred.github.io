$(document).ready(function(){

  $('#logo').css("visibility", "hidden");
  $('.header').css("visibility", "hidden");


  // trigger animation after loading
  $(window).load(function(){

   function show_title(){
     $('#logo').css("visibility", "visible");
     $('#logo').addClass('animated slideExpandUp');
      //  remove animation after load to get hover effects
       window.setTimeout(

         $('#logo').removeClass('animated'), 3000);
   };

   function show_desc(){
     $('.header').css("visibility", "visible");
     $('.header').addClass('animated slideDown');
   };

   window.setTimeout( show_title, 1 );

   window.setTimeout( show_desc, 500 );

  })

  // trigger footer animations
  $(window).scroll(function() {

    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
      $('.animate-footer').addClass("slideUp");
    }

  });

  // trigger footer CSS tossing animations
  $('.github-tossing').hover(function() {
    $(this).addClass("tossing");
  });
  $('.dribbble-tossing').hover(function() {
    $(this).addClass("tossing");
  });
  $('.facebook-tossing').hover(function() {
    $(this).addClass("tossing");
  });
  $('.twitter-tossing').hover(function() {
    $(this).addClass("tossing");
  });
  $('.instagram-tossing').hover(function() {
    $(this).addClass("tossing");
  });

  // $("#resume").hide();

  $("#life").hide();

  $("#work-button").on('click', function(){
    $("#resume").hide();
    $("#life").hide();
    $('#work').slideDown('slow')
  });

  $("#resume-button").on('click', function(){
    $("#work").hide();
    $("#life").hide();
    $('#resume').slideDown('slow')
  });

  $("#life-button").on('click', function(){
    $("#work").hide();
    $("#resume").hide();
    $("#life").slideDown('slow')
  });

  // hover effect for portfolio images
  $("#main-image").mouseover(function(){
    $("#main-image .view").css("display", "block");
  });
  $("#main-image").mouseleave(function(){
    $("#main-image .view").css("display", "none");
  });
  $("#image-1").mouseover(function(){
    $("#image-1 .view").css("display", "block");
  });
  $("#image-1").mouseleave(function(){
    $("#image-1 .view").css("display", "none");
  });
  $("#image-2").mouseover(function(){
    $("#image-2 .view").css("display", "block");
  });
  $("#image-2").mouseleave(function(){
    $("#image-2 .view").css("display", "none");
  });
  $("#image-3").mouseover(function(){
    $("#image-3 .view").css("display", "block");
  });
  $("#image-3").mouseleave(function(){
    $("#image-3 .view").css("display", "none");
  });
  $("#image-4").mouseover(function(){
    $("#image-4 .view").css("display", "block");
  });
  $("#image-4").mouseleave(function(){
    $("#image-4 .view").css("display", "none");
  });
  $("#image-5").mouseover(function(){
    $("#image-5 .view").css("display", "block");
  });
  $("#image-5").mouseleave(function(){
    $("#image-5 .view").css("display", "none");
  });
  $("#image-6").mouseover(function(){
    $("#image-6 .view").css("display", "block");
  });
  $("#image-6").mouseleave(function(){
    $("#image-6 .view").css("display", "none");
  });

  $("#main-image .view").mouseenter(function(){
    $("#main-image img").click();
  });
  $("#image-1 .view").mouseenter(function(){
    $("#image-1 img").click();
  });
  $("#image-2 .view").mouseenter(function(){
    $("#image-2 img").click();
  });
  $("#image-3 .view").mouseenter(function(){
    $("#image-3 img").click();
  });
  $("#image-4 .view").mouseenter(function(){
    $("#image-4 img").click();
  });
  $("#image-5 .view").mouseenter(function(){
    $("#image-5 img").click();
  });
  $("#image-6 .view").mouseenter(function(){
    $("#image-6 img").click();
  });

  $("#resume-project-button").on('click', function(){
    $("#work").hide();
    $('#resume').slideDown('slow')
     // window.location.href = "/";
     // return true
  });


  // flip da logo
  $('.hover').hover(function(){
      $(this).addClass('flip');
  },function(){
      $(this).removeClass('flip');
  });

  // so fancy
  $(".fancybox").fancybox({
    helpers : {
        title: {
            type: 'outside'
        }
    }
  });

});

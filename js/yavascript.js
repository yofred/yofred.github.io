$(document).ready(function(){

  $(".fancybox").fancybox();
  
  // $("#resume").hide();
  
  $("#work-button").on('click', function(){
    $("#resume").hide();
    $('#work').slideDown('slow')
  });
  
  $("#resume-button").on('click', function(){
    $("#work").hide();
    $('#resume').slideDown('slow')
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
  
  
  
  
  // $("#resume-project-button").on('click', function(){
  //    $("#work").hide();
  //    $('#resume').slideDown('slow')
  //    window.location.href = "/";
  //    // return true
  // });
  
  $("#resume-project-button").on('click', function(){
    $("#work").hide();
    $('#resume').slideDown('slow')
     // window.location.href = "/";
     // return true
  });

  
  $('.hover').hover(function(){
      $(this).addClass('flip');
  },function(){
      $(this).removeClass('flip');
  });
  
});
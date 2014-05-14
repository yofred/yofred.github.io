$(document).ready(function(){

  $(".fancybox").fancybox();
  
  $("#resume").hide();
  $("#work-button").on('click', function(){
    $("#resume").hide();
    $('#work').slideDown('slow')
  });
  
  $("#resume-button").on('click', function(){
    $("#work").hide();
    $('#resume').slideDown('slow')
  });

  
  $('.hover').hover(function(){
      $(this).addClass('flip');
  },function(){
      $(this).removeClass('flip');
  });
  
});

$(document).ready(function(){

  $("#resume").hide();
  $(".fancybox").fancybox();

  
  $('.hover').hover(function(){
      $(this).addClass('flip');
  },function(){
      $(this).removeClass('flip');
  });
  
});

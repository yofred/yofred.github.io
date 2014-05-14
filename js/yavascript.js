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


// $(document).ready(function(){
// 
//  $(".fancybox").fancybox();
//   
//   $("#work-button").on('click', function(){
//     $("#resume").hide();
//     $('#work').slideDown('slow')
//   });
//   
//   $("#resume-button").on('click', function(){
//     $("#work").hide();
//     $('#resume').slideDown('slow');
//   });
//   
//   $("#resume-project-button").on('click', function(){
//      $("#work").hide();
//      $('#resume').show();
//   });
// 
//   
//   $('.hover').hover(function(){
//       $(this).addClass('flip');
//   },function(){
//       $(this).removeClass('flip');
//   });
//   
// });
function fade() {
$('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);

$(document).ready(function(){
  $(window).scroll(function() {
      $("p").show().fadeOut("slow");
  });
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


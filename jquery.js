$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

$(document).ready(function(){
  $(".demo").click(function(){
    $("#panel").slideUp();
  });
});

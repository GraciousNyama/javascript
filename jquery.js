$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(10000);
  });
});

$(document).ready(function(){
  $(".demo").click(function(){
    $("#panel").slideUp();
  });
});

$(document).ready(function(){
  $(".memo").click(function(){
    $("#panel").stop();
  });
});

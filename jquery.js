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

window.alert("Hi, am alert")
$("#panel").css("background-color", "#cccccc");
$("#panel").text("click me and see");
$("#panel").html("<b>hello world!<br>");

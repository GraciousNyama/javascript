$(document).ready(function(){
  $("button.button").hover(function(){
    $(".weare").hide();
});
});

$(document).ready(function(){
  $("ul li:first").hover(function(){
    $("ul li:first").hide();
});
});

$(document).ready(function(){
  $("button.show").hover(function(){
    $("ul li:first,.weare").show()
});
});

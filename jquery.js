$(document).ready(function(){
  $("button.button").click(function(){
    $(".weare").hide();
});
});

$(document).ready(function(){
  $("ul li:first").click(function(){
    $("ul li:first").hide();
});
});

$(document).ready(function(){
  $("button.show").click(function(){
    $("ul li:first,.weare").show()
});
});

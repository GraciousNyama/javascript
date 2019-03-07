$(document).ready(function(){
  $("button.button").dblclick(function(){
    $(".weare").hide();
});
});

$(document).ready(function(){
  $("ul li:first").dblclick(function(){
    $("ul li:first").hide();
});
});

$(document).ready(function(){
  $("button.show").dblclick(function(){
    $("ul li:first,.weare").show()
});
});

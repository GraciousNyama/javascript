
var corolla ={
  brand:"Toyota",
  make:"Corolla",
  type:"Sedan",
  color:"blue",
  yearofRelease:1997
};
var rangeRover={
  brand:"Range Rover",
  make:"Sport",
  type:"Suv",
  color:"white",
  yearofRelease:2010
};
var cars=[corolla, rangeRover];
var pickUp={
  brand:"Nissan",
  make:"Hard body",
  type:"Pick Up Truck",
  color:"Grey",
  yearofRelease:2003
}
cars.unshift(pickUp);
var i=0;
  do{
    document.write("this is a " + cars[i].brand + " car called a" + cars[i].make +
  "!<br> it is a" + cars[i].type + " which is" + cars[i].color +
  " and was released in" + cars[i].yearofRelease + "<br/><br/>");
  i++;
}

  while(i<cars.length);
  $(document).ready(function(){
    $(".memo").click(function(){
      $("*").hide();
    });
  });

  $(document).ready(function(){
    $(".demo").click(function(){
      $("*").fadeOut(5000);
    });
  });
  $(document).ready(function(){
    $(".mogo").click(function(){
      $("*").show();
    });
  });
  $(document).ready(function(){
    $(".momo").click(function(){
      $("*").fadeIn();
    });
  });
  $(document).ready(function(){
    $(".geee").click(function(){
      $(".teee").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'});
    });
  });

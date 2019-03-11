
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
for(i=0; i<cars.length; i++){
  document.write(
    "this is a " + cars[i].brand + " car called a" + cars[i].make +
    "!<br> it is a" + cars[i].type + " which is" + cars[i].color +
    " and was released in" + cars[i].yearofRelease + "<br/><br/>");
  }

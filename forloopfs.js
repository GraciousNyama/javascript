var cars= ["BMW", "BENZ", "AUDI","VW", "RUF"];

var i =0;
var text= "<ul>";
cars.pop()
while (i<cars.length){
  text += "<li>" +cars[i]+"</li>" ;
  i++;
}
text += "</ul>";

document.getElementById("demo").innerHTML=text;

var cars= ["BMW", "BENZ", "AUDI","VW", "RUF"];
var text= "<ul>"
cars.pop()
for(i =0; i< 4; i++){
  text += "<li>" +cars[i]+"</li>" ;
}
text += "</ul>"

document.getElementById("demo").innerHTML=text;

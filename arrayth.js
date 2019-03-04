var cars =["BMW" ," Benz", " Toyota"];

document.getElementById("demo").innerHTML="there  are" + cars.length +"cars ...."+ cars.toString();
cars.push("land rover");

document.getElementById("memo").innerHTML="there  are now" + cars.length +"cars ..."+cars.toString();

cars.pop();
cars.pop();
document.getElementById("log").innerHTML="there  are now " + cars.length +"cars ..."+cars.toString();

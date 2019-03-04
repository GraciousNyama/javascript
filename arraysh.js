var cars =["BMW" ," Benz", " Toyota"];

document.getElementById("demo").innerHTML="there  are" + cars.length +"cars ...."+ cars.toString();
cars.unshift("lexus");

document.getElementById("memo").innerHTML="there  are now" + cars.length +"cars ..."+cars.toString();

cars.shift();
cars.fit();
document.getElementById("log").innerHTML="there  are now " + cars.length +"cars ..."+cars.toString();

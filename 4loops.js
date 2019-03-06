var numbers= [1,2,3,4,5];
var text="";

for(i =0; i< numbers.length; i++){
  text += numbers[i]+"<br>";
}
document.getElementById("demo").innerHTML=text;

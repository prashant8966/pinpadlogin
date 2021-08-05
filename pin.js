var value = "";
 function trylogin(){
  if(input.value === "1234")
{ window.location.href = "https://www.ecellrgpv.com/";
}else{
  alert("Incorrect Pin!");
  this.updatevalue();
}}
function updatevalue(){
  input.value ="";
  this.value="";
}

function keypress(key){
switch(key){
case "back":
var value1 = document.getElementById("input").value;
document.getElementById("input").value = input.value.substr(0, value1.length - 1);
this.value=input.value;
break;
case "done":
this.trylogin();
break;
default :
value =value+key;
input.value = value;
break;}}

let value1=0;
let value2=0;
let value3=0;
let value4=0;
let value5=0;
let value6=0;
let final=0;
value1 = (localStorage.getItem("stars1"));
value2 = (localStorage.getItem("stars2"))
value3 = (localStorage.getItem("stars3"));
value4 = (localStorage.getItem("stars4"));
value5 = (localStorage.getItem("stars5"));
value6 = (localStorage.getItem("stars6"));
final = Number(value1)+Number(value2)+Number(value3)+Number(value4)+Number(value5)+Number(value6);
document.querySelector(".scoreboard").innerHTML=(final);
document.querySelector("#first").innerHTML= Number(value1)+ " 🌟 " + " out of" +" 15 🌟";
document.querySelector("#second").innerHTML= Number(value2)+ " 🌟 " + " out of" +" 15 🌟";
document.querySelector("#third").innerHTML= Number(value3)+ " 🌟 " + " out of" +" 15 🌟";
document.querySelector("#fourth").innerHTML= Number(value4)+ " 🌟 " + " out of" +" 15 🌟";
document.querySelector("#fifth").innerHTML= Number(value5)+ " 🌟 " + " out of" +" 15 🌟";
document.querySelector("#sixth").innerHTML= Number(value6)+ " 🌟 " + " out of" +" 15 🌟";
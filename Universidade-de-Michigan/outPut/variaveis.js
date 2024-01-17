console.log("variaveis js file");
// Numbers:
let lengthh = 16;
let weight = 7.5;
    // Strings:
let color = "Yellow";
let lastName = "Johnson";
function variaveis(){
    console.log("dentro de variaveis");
    console.log(lengthh)
    document.getElementById("var1").innerHTML = lengthh;
    document.getElementById("var2").innerHTML = color;
    document.getElementById("var3").innerHTML = color.length;
    document.getElementById("var4").innerHTML = lastName.length;
    document.querySelector("p").style.backgroundColor = "red";
    document.querySelector("a").style.backgroundColor = "yellow";
        
};

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
console.log("fim do variaveis.js");

//Html DOM
function htmlDOM(){
    document.getElementById("var1").style.backgroundColor = "green";
    document.getElementById("var3").style.backgroundColor = "green";
    document.getElementById("var5").style.backgroundColor = "green";
    document.getElementById("var7").style.backgroundColor = "green";
}




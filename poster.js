// HEADER SECTION
// this code styles the header section of webpage, including the body and header elements


let body = document.querySelector("body")
body.style.margin = "0";
body.style.padding = "0";
body.style.backgroundImage = "url(https://i.pinimg.com/1200x/7d/10/19/7d101983d33110cf6b7225fdfa70acaa.jpg)";
body.style.backgroundSize= "cover";
// body.style.backgroundBlendMode = "lighten";





let header = document.querySelector(".header");
header.style.backgroundColor = "black";
header.style.color = "white";
header.style.padding = "10px";
header.style.height = "80px";


let h1 = document.querySelector(".head");
h1.style.display = "inline-block";
h1.style.padding = "10px"
h1.style.marginRight = "150px"
h1.style.marginLeft = "20px"

let headspan = document.querySelector(".header span")
headspan.style.marginRight = "10px"


let anchs = document.querySelectorAll(".header a");
for (let anch of anchs) {
    anch.style.color = " white";
    anch.style.textDecoration = "none";
    anch.style.padding = "10px";
    anch.style.marginRight = "50px"
}



let india = document.getElementById("india");

india.style.backgroundColor = "transparent";
india.style.color = "yellow";
india.style.border = "2px solid transparent";
india.style.marginRight = "50px";


let chat = document.getElementById("chat");
chat.style.backgroundColor = "yellow";
chat.style.color = "black";
chat.style.border = "2px solid transparent";
chat.style.borderRadius = "15px";


let h2 = document.querySelector(".head2")

h2.style.display = "inline-block";
h2.style.fontSize = "50px";
h2.style.fontFamily = "Comic Sans MS', cursive";
h2.style.maxWidth = "500px";
h2.style.padding = "30px";
h2.style.height = "1.5px";








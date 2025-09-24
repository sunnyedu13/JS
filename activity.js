let delbtn1 = document.getElementById("dlt1");
let li1 = document.getElementById("li1");



delbtn1.addEventListener("click", ()=>{
    li1.style.display = "none";
})

let up1 = document.getElementsByClassName("upper1");

up1[0].addEventListener("click", ()=>{
    li1.style.textTransform = "uppercase";
    li1.style.fontSize = "1.5em"
})
let h2 = document.querySelector("h2");
let btn= document.querySelector("button");
let div = document.querySelector("div");


btn.addEventListener("click",()=>{
  
let randomColor = getRandomColor();
div.style.backgroundColor = randomColor;
h2.innerText = randomColor;
h2.style.color = randomColor;

})


function getRandomColor(){
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue= Math.round(Math.random()*255);

    let color =`rgb(${red}, ${green}, ${blue}`
    return color;
}



let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector ("p");
let bttn = document.querySelector("button");


function chanecolor(){
    this.style.backgroundColor = "black";
    this.style.color = "white";
}


// synchronous

h1.addEventListener("click",chanecolor)
h3.addEventListener("click",chanecolor)
p.addEventListener("click",chanecolor)
bttn.addEventListener("click",chanecolor)
/*function sayHello(){
    console.log("hello to all!!")
}


let btns = document.querySelectorAll("button")
for(let btn of btns){
    btn.onclick = sayHello;
    btn.onlclick =()=>{
        alert ("thanks to hover on me")
    }
}  */



    // EVENTLISTENER

    let body = document.querySelector("body")

    let darkBtn = document.getElementById("dark");
    darkBtn.addEventListener("click",()=>{
        body.style.backgroundColor ="black";
        body.style.color ="white";
    })


     let lightBtn = document.getElementById("light");
    lightBtn.addEventListener("click",()=>{
        body.style.backgroundColor ="grey";
        body.style.color ="black";
    })
    
    let li1 = document.getElementById("li1");
    let up1 = document.getElementById("up1");
    let sold1 = document.getElementById("sold1");


    up1.addEventListener ('click', ()=>{
        li1.style.textTransform = "uppercase";
    })
  
    sold1.addEventListener ('click', ()=>{
        li1.style.color = "red";
        li1.style.textDecoration = "line-through"; 
    })


 up2.addEventListener ('click', ()=>{
        li2.style.textTransform = "uppercase";
    })
  
    sold2.addEventListener ('click', ()=>{
        li2.style.color = "red";
        li2.style.textDecoration = "line-through"; 
    })


     up3.addEventListener ('click', ()=>{
        li3.style.textTransform = "uppercase";
    })
  
    sold3.addEventListener ('click', ()=>{
        li3.style.color = "red";
        li3.style.textDecoration = "line-through"; 
    })
    
up4.addEventListener ('click', ()=>{
        li4.style.textTransform = "uppercase";
    })
  
    sold4.addEventListener ('click', ()=>{
        li4.style.color = "red";
        li4.style.textDecoration = "line-through"; 
    })


    up5.addEventListener ('click', ()=>{
        li5.style.textTransform = "uppercase";
    })
  
    sold5.addEventListener ('click', ()=>{
        li5.style.color = "red";
        li5s.style.textDecoration = "line-through"; 
    })
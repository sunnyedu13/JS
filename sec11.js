// Event keyword

// let btn = document.querySelector("button");

// btn.addEventListener("dblclick",  (event)=>{
//     console.log("button is working")
//     console.log(event)
// });


let inp = document.querySelector("input");

// inp.addEventListener("keydown",(event)=>{
//     console.log("button is working")
//     console.log(event.key)
// });

// Moving activity

// inp.addEventListener("keydown", (e)=>{

//   if(e.key == "ArrowRight"){
//     console.log("character moves forward.")
//   }else if(e.key == "ArrowLeft"){
//     console.log("character  moves backward.")
//   }  
//   else if (e.key == "ArrowUp"){
//     console.log("character moves upward.")
//   }
//   else if (e.key=="ArrowDown"){
//     console.log("character moves downward.")
//   } else {
//     console.log("OOPS!! Wrong key pressed.")
//   }
// })


let btn = document.querySelector("button");
 let form = document.querySelector("form");

 form.addEventListener("submit", (event)=>{
 
    // event.preventDefault(); it is used to stop browser page
    console.log("form submitted")
 })






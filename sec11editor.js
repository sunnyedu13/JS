 let btn = document.querySelector("button");
 let inp = document.querySelector("input");
 let p = document.querySelector("p");
let form = document.querySelector("form")

//  inp.addEventListener("input",  ()=>{
//     p.innerHTML = inp.value;
//  })


inp.addEventListener("change", ()=>{
    p.innerHTML = inp.value;
    inp.value ="";
})
// DOM == DOCUMENT OBJECT MODEL

//  let h1 = document.getElementsByTagName("h1");

//  console.dir(h1[0])

//  let h11= document.getElementsByClassName("head1");

//  console.dir(h11[0])

//  let h111=document.getElementById("headid");

//  console.dir(h111)



let h1 = document.querySelector(".head1")

console.dir(h1)

h1.style.color = "bloodred";
h1.style.textShadow = "20px  6px 4px rgba(0, 0, 0, 0.4)"
h1.style.backgroundColor ="" // JS is a case sensitive langauge (we use camel something)
h1.style.border = "2px solid Black"
h1.style.padding = "10px" // Padding is used to create space inside an element, between its content and its border. 

let img = document.querySelector("img");
console.dir(img)


img.style.height ="30px"
img.style.width = "30px"

let body = document.querySelector("body");
body.style.backgroundImage = "url(https://wallpapercat.com/w/full/c/c/0/309528-1080x1920-iphone-full-hd-spider-man-wallpaper.jpg)"
body.style.backgroundSize = "cover"
body.style.backgroundColor="0.3"



// set & getAttributes.

let head12 = document.querySelector("h1");

h1.setAttribute("id","head12");
console.log(h1.getAttribute("id"))

// changig color

let lis = document.querySelectorAll("li");


for(let li of lis){
    li.style.color="red";
    li.style.marginBottom = "10px"
}

// NAVIGATION ( PARENTS,CHILDREN,SIBLINGS)

// 1. parentsElement
console.log(img.parentElement)


// 2.children


console.log(h1.firstChild)

console.log(h1.lastChild)

console.log(body.firstElementChild)

let ul = document.querySelector("ul")
console.log(ul.children[0])

ul.children[1].innerText ="HANUMAN"

ul.children[1].style.color="red"

//3. siblings

console.log(img.previousSibling)

console.log(img.nextElementSibling)

img.nextElementSibling.innerText = "IRONMAN";
img.nextElementSibling.style.color ="orange"




let div = document.querySelector("div");

let btn = document.createElement("button");
btn.innerText = "login";
btn.style.color = "white";
btn.style.backgroundColor ="black";


 div.prepend(btn);
  


//insertAdjacecentElement

// div.insertAdjacentElement("afterend",btn)
// div.insertAdjacentElement("beforeend",btn)

// REMOVE ELEMENT

btn.remove();
img.remove();
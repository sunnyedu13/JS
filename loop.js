// For loop

for(let i =0; i<=15; i++){  
    console.log(`value of current i: ${i}  `)
}

// even numbers from 1 to 10.

for(let i=2; i<=10; i=i+2){
    console.log(`current even numbers: ${i}`)
}

// odd nnumbers from 1 to 9.

for( let i=1; i<=9; i=i+2){ 
    console.log(`current odd numbers: ${i}`)
}

// print table of 5 uo to 50.

for(let i=5; i<=50; i=i+5 ){
    console.log(i)
}

// print the table of n number through prompting.

let n = prompt("enter any number")
let num = parseInt(n);
let multiplier = 1;

for(let i = num; i<=num*10; i+=num){
    console.log(`${n}*${multiplier++} =${i}`)
}

// WHILE LOOP 

console.log("product through while loop.")


 let a = 5; // Initialization
 
 while(a<=50){ // condition
    console.log(a); a+=5;  // iteration
 }

 // FOR OF LOOP

 let name = "UDAY SINGH";

 for(let a of name){
    console.log(a)
 }


 //. 1) QUESTIONS FOR LOOP,WHILE LOOP,FOR OF LOOP

// a) FOR LOOP


for(let i=1; i<=10; i++){
    console.log(`value of current i ${i}`)
}

//  1. b) WHILE LOOP

let I=1; 
while(I<=10){
    console.log(I); 
    I++
}

// c) FOR OF LOOP

let num2 = "12345678910";

for(let A of num2){
    console.log(A)
}

//2. a) FOR LOOP
for(let e =2; e<=20; e=e+2){
    console.log(`current even numbers ${e}`)
}

// b) WHILE LOOP

let E =2;
while(E<=20) {
    console.log(E); E=E+2
}
// C) FOR OF LOOP

let even = "";

for(let e of even){
    console.log(e)
}


//3.a) FOR LOOP

for(let b=5;  b<=50; b=b+5){
    console.log(b)
}

// b) while loop

let B= 5
while( B<=50){console.log(B); B=B+5
}

// C) FOR OF



// 4. FOR LOOP
 for(let i = 1; i<=10; i++){
    console.log(`Square of ${i} is ${i*i}`)
 }


//5. a)FOR LOOP


for( let i=10; i>=1; i--){
    console.log(i)
}


// b) WHILE LOOP 
let i=10
while (i>=1 ){
    console.log(i); i--
}


// 6. FOR LOOP
let sum=0;
for(let i=1; i<=10; i++){
    console.log(sum+=i)
}

// 7. FOR LOOP

for( let i=1; i<=50; i= i+2){
    console.log( `odd number ${i}`)
}

// 8.FOR LOOP


    // FOR LOOP

    let factorial = 1;

    for(  i=1; i<=5; i++){
        console.log(`factorial of 5 ${factorial*=i}`)
    }

    // 9.FOR LOOP DIVISIBLE BY 3 FROM 1 TO 100
    
    
    for( i>=1; i<=100; i++)
    {
        console.log(`divisible by 3  ${i%3===0}`)

    }

    // 
    //10.
    let N =prompt("9")
    let num3 = parseInt(9);
    let MULTIPLIER =1;

    for( let i=num3; i<=num3*10; i+=num3){
        console.log(`${num3}*${MULTIPLIER++}=${i}`)
    }
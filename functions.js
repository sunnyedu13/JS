// Functions in js


// 1. Named function through function keyword


function abc() {

    console.log("RAM RAM");
}
abc(); //execution or function callling

function loop() {

    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}


loop()



//2. sturctured function or variable function

let a = function () {
    console.log("Executed variable")
}

a()

//3. Arrow function

let a2 = () => {
    console.log(" Executed Arrow function")
}
a2()


// 4. functions with arugments


function sum(a, b) {
    console.log(a + b)
}
sum(45, 56)


function diff(a, b) {
    console.log(a - b)
}
diff(90, 34)


function pro(a, b) {
    console.log(a * b)
}
pro(4, 8)

function pow(a, b) {
    console.log(a ** b)
}
pow(6, 3)



// 1. Global scope

let a1 = 10; //Global scope

function xyz() {
    console.log(a1)
}
xyz()

// 2. Block scope


{
    let b = 30;

}
 
// console.log(b)



// 3. function  scope

function num() {
    let z = 33;
    let char = "A"
};

num();

//this keywords-- "this" keyword refers to an object that is executing the current piece of code.(method)



let student = {
    name: "karan",
    age:24,
    Maths:96,
    Sci:57,
    Eng:78,
    getAvg(){
        let avg = (this.Eng+this.Maths+this.Sci)/3;
        return avg;
    }
}

console.log(student.getAvg())

// try & catch ----->>>>> this will execute the code after an error


console.log("hello")


try{
    console.log(a5)
}catch(e){
    console.log(e)
}

console.log("hello after a")
console.log(8585)


// SetTimeout()

setTimeout(()=>{
    console.log("The time is over!!")
},3000)


// setInterval()

let i = setInterval(function(){
    console.log("I am getting back an back again!")
}, 4000)

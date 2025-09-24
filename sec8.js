// Array Methods

// 1. for Each()
let arr = [1,2,3,46,9]

function print(el){
    console.log(el)
}

arr.forEach(print)

// 2. map()====array formed on the basis of our condition

// i) console === individual elements formed (print)
// ii) return keyword == to form an array 


let double = arr.map((el)=>{
    return el*2
})

console.log("double2")
let double2 = arr.map((el)=>{
    console.log(el*2)
})

// 3. filter
let arr2 = [2,3,5,8,10,13,18];

let even = arr2.filter((el)=>{
    return el%2 ==0
})

let odd = arr2.filter((el)=>{
    return el%2 !=0
})


// 4. every()

let nums = [319,78,45,23,45,86,344];

let istrue = nums.every((el)=>{
    return el>21
}
)

// 5. some().


let istrue2 = nums.some((el)=>{
    return el>319
})


//6. reduce().

let num =[1,2,5,9,10];

let pro = num.reduce((res,el)=>{
    return res*el
}
)

// 7. spread().


console.log("finding Max through spread method")


let numbers = [1,2,3,94,23,44]

console.log(Math.max(...numbers))





//QUESTIONS

//1.
const students = [
  { name: "Aarav", age: 20 },
  { name: "Isha", age: 22 },
  { name: "Kabir", age: 19 }
];

students.forEach(student => {
  console.log(student.name);
});

//2.
 let course =[ "mtech","btech","bsc","msc"];

course.forEach(course=>{
    console.log( course + " 🎓");
});

// 3.

let number2 = [2,3,6,9,10,16];

number2.forEach(function(number2){
    if(number2%2===0){
        console.log(number2)
    }
})

// 4.Add 10% bonus to each employee's salary in an array of salaries.

const salaries = [40000, 55000, 70000, 32000];

const updatedSalaries = salaries.map(salaries => salaries * 1.10);

console.log(updatedSalaries);


//5.	Create a new array of full names from an array of {firstName, lastName}.


const person =[
    {Firstname: "aryan",  Lastname: "Verma"},
    {Firstname: "uday", Lastname:"singh"},
];

const fullname = person.map(person  =>`${person.Firstname} ${person.Lastname}
    `);

console.log(fullname);

//DIFFERRENT WAY


const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Alice', lastName: 'Johnson' }
];

const fullNames = people.map(person => `${person.firstName} ${person.lastName}`);

console.log(fullNames);



// 6. Convert an array of prices into strings like ₹500.

let prices =[100,340,890,789];

let pricestring = prices.map(price => `₹${price}`);

console.log(pricestring);


//  7.From a list of products, return only products with price > 1000

let produts =[300,1200,17000,2900];
    

let highprice= produts.filter(produts=>produts>1000);

console.log(highprice);

// 8.	Return names of students who scored above 75


let score = [ 
    { name: "uday", score: 78 },
    { name: "aryan", score: 35 },
    { name: "raju", score: 46 },
    { name: "ananya", score: 90 },
];

let above75 = score.filter((s) => {
    return s.score >= 75;
});
console.log(above75);


// 9.Filter out even numbers from an array
 
let number4= [1,9,7,10,13,181,624];

 let evens= number4.filter((numb)=>{
    return(numb%2==0)
 }); 


 // 10.Calculate the total marks from an array of numbers.

 let marks=[45,76,61,63,71];

 let totalmarks= marks.reduce((sum,marks)=>{
    return(sum+marks);
 })

 console.log (totalmarks);


//11.

 console.log(Math.max(...marks))

 //12.Combine all strings in an array into a single sentence


 let arry=["nishant","walia","nalagarh"];

 let combinestring = arry.reduce((sum,arry)=>{
    return(sum+arry);
 });

console.log(combinestring);

//13.	Check if any product is out of stock (stock: 0).


let products= [
    {product:"oliveoil", stock:30},
    {product:"colgate", stock:34},
    {products: "perfums", stock:1},
    {products:"soap", stocks:0},
];

let stock0= products.some((stock)=>{
    return(stock=0);
}); 
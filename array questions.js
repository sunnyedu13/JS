// 1.

let fruits = ["mango", "banana", "watermelon", "papaya"];
for (let fruit of fruits) {
    console.log(fruits);
}

// 2.


//3.
let arra = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arra.sort().reverse());

// 4.

let arr = [1, 2, 3, 3, 4, 5, 6, 7, 8];

let dup = arr.slice(3, 4);
console.log(dup);


//11.

let words = ["banana", "apple", "cherry", "date"];
words.sort();
console.log(words);

// 13.	Create an array of names and print only those that start with the letter "A".


let studentsname


// 14. 14.	Create an array of numbers and find the average.

let numb



//15.	Remove the first and last elements from an array.

let arry = [10, 20, 30, 40, 50];
arry.shift()

arry.pop()

console.log("Updated Array:", arry);


// 16. objects questions


let student1 = {
    name: "uday",
    class: "Btech",
    rollno: "7654",
}
console.log(student1);

//17.

let person = {
    NAME: "uday",
    AGE: 25
};

person.city = "chandigarh"; // add new property


delete person.AGE; // delete existinng property

console.log(person);


//19.
let allstudents = {
    st1: {
        name: "uday",
        class: "Btech",
        rollno: "7654",
    },
    st2: {
        name: "ujjwal",
        class: "MCA AI/ML",
        rollno: "7657"
    },
    st3: {
        name: "tushar",
        class: "BCA",
        rollno: "7634"

    },
};

console.log(allstudents)


//20.


//22.

let originalmarks = {
    maths: 65,
    Hindi: 78,
    EVS: 98
};


let clone = { ...originalmarks, English: 78 };


console.log(originalmarks);
console.log(clone);

// 23.	Convert an object to an array using Object.entries().


let studentinfo = {
    NAME: "Ananya",
    class: "MSc",
    grade: "A"
}
let entriesarray = Object.entries(studentinfo);

console.log(entriesarray);

// 24.- Check if a specific key exists in an object.


let student = {
    name: "Neha",
    age: 21
};

console.log("name" in student); // true
console.log("grade" in student); // false

// 25.Create an array of student objects and filter students with marks above 70.


// 5.

let arr2 = [2,3,5,8,10,13,18];

let even = arr2.filter((el)=>{
    return el%2 ==0
})

// 6. create a new array where each element is squared using.map().



let aar = [3,2,5,9,1,4];

let squared= arr.map((el)=>{
    return el**2
}
)

// 9. use. reduce() to find the product of all numbers in an array.
 

let num =[1,2,5,9,10];

let pro = num.reduce((res,el)=>{
    return res*el
}
)

// 8. checks if all elements in an array are greater than a certain number using. every().


let nums = [319,78,45,23,45,86,344];

let isture = nums.every((el)=>{
    return el>21
}
)





    




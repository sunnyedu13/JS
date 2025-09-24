// Arrays

let students = ["tushar", "aslam", "naman", "ajay"]

let student1info = ["kanish", "BCA", "AU", 9876447332]

console.log(student1info[2])

// Array Methods

// 1. Push()--inserting an element at the end of an array.

student1info.push("baddi");

console.log(student1info)

//2. pop()-- removing an element at the end of an array.
student1info.pop()
console.log(student1info)

//3. Unshift-- inserting an element at the front of an array.

student1info.unshift("3214");
console.log(student1info)


// 4. shift-- remove an element at the  front of an array.
student1info.shift()
console.log(student1info)



// delete

delete student1info [1]

console.log(student1info) 

console.log(student1info.length) // length remains the same

// 5. Indexof

let p1 = ["harman", "BSc", "3213"];

console.log(p1.indexOf("BSc"));



// 6.Concat()

let p2 = ["kanika", "BTECH", 8765];

let p3 = p2.concat(p1);
console.log(p3);


let num1 = "897";

let num2 = "987";

let res = num2.concat(num1);
console.log(res);

// 7. slice()


let nums = [1, 3, 4, 6, 8, 7, 2, 9, 5];

let halfnums = nums.slice(3, 6);

console.log(halfnums);

// 8.splice()


nums.splice(3, 3, 9, 9, 9);
console.log(nums);

//9.Replace()

let str = "hello everyone";

let newstr = str.replace("hello", "RAM RAM");

console.log(newstr);

// 10. Repeat()

let name = "Radhe ";

console.log(name.repeat(108));

// 11.Reverse();

let xyz = [1, 2, 3, 4, 5, 6, 9, 10, 7];
console.log(xyz.reverse());


// 12. sort()

let bcs =[2,8,9,4,6]
console.log(bcs.sort()); // ascending order
console.log(bcs.sort().reverse()); //descending order


// objects

let student1 = {
    name: "uday",
    class: "Btech",
    rollno: "7654",
}
console.log(student1);

student1.name = "aniket";
student1.class = "MCA AI/ML";
student1.address = "baddi";

console.log(student1);


// nested obejct

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

console.log(allstudents.st1)


// Nested Arrays

let allclients = [
    ["satish", "baddi", 9885343224],
    ["UDAYA", "baddi", 9885345674],
    ["NAMAN", "baddi", 9846778784],
];

console.log(allclients[1]);


// Array of objects

let nestobj = [
    {
        name: "sourav",
        address: "nalagarh",
        id: "9987",

    },
    {
        name: "rajan",
        address: "nalagarh",
        id: "3457",

    },
    {
        name: "rishi",
        address: "nalagarh",
        id: "0097",
    },

];
console.log(nestobj[1].name)

// objects of arrays

let allarrays = {
   aar1: [
    "raju","kaju","taju"
   ],
   aar2:[   
     "tanu","ballu","dishu"
,   ],
aar3:[
"billie","ujju","aju"
],
};

console.log(allarrays.aar1[1])

// Maths objects

// 1.absolute method-- positive number

console.log(Math.abs(-6))

// 2. Math.Floor() -- downward rounding

console.log(Math.floor(2.99997))

// 3.Math.ceil()-- upward rounding

console.log(Math.ceil(3.1876))

// 4.Math round()-- Normal rounding

console.log(Math.round(1.3))   // above .5 it's always shows upward rounding


// 5. Math random()--Generate Random number between 0 to 1 but never be o or 1

console.log(Math.random())

// Generate a Random Number from 1 to 10 but it should be natural number or an integer( integer are those which is not a decimal)

console.log(Math.round(Math.random()*10))
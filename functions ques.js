// // Ques.30

// function checkIfEmpty(arr){
//     return arr.length === 0;      // here return function will check whether the input of an array is true/false)
// }
// console.log(checkIfEmpty([]));
// console.log(checkIfEmpty([1,2,3]))

// // Ques.29

// function absoluteValue(num){
//     return Math.abs(num);
// }

// console.log(absoluteValue(-3));
// console.log(absoluteValue(10));

// // Ques.26

// function removeElement(arr, element){
//     return arr.filter(item => item !==element);
// }

//  let numbers = [1,2,3,5,4];
//  let result =  removeElement(numbers, 1);

//  console.log(result);

   
// // Ques.22

// function mergeArrays(array1 , array2){
//     return[...array1, ...array2];
// }

// let array1 = [1,2];
// let array2 = [3,4];
// let mergedArrays = mergeArrays(array1 , array2);

// console.log(mergedArrays)

// // Ques.21

// function isPrime(num){ 
//     if(num <= 1) return false;
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(2));
// console.log(isPrime(6));
// console.log(isPrime(12));
// console.log(isPrime(7));

// // Ques.20

// function returnLastElement(arr){
//     return arr[arr.length - 1];
// }

// let numbers = [1,2,3,4,5];
// console.log(returnLastElement(numbers))

// // Ques.16

// function sortAscending(arr){
//     return arr.sort((a,b) => a-b);
// }

// let numbers = [9,6,5,10,4];
// console.log(sortAscending(numbers))

// // Ques.19

// function multiplyArray(arr){
//     return arr.reduce((product, num) => product*num,1);
// }

// let numbers = [12,3,5]; 
// console.log(multiplyArray(numbers))

// // Ques.15

// function countVowels(arr){
//     let count = 0;
//     let vowels = ['a','e','i','o','u'];

//     for(let i = 0; i < arr.length; i++){
//         let char = arr[i].toLowerCase();
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// let letters = ['a','b','d','o','p','s','u'];
// console.log(countVowels(letters));

// Ques.14

// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }

// let numbers = [1,2,3,4,3,5,6,7,3,2,8];
// let uniqueNumbers = removeDuplicates(numbers);
// console.log(uniqueNumbers)

// // Ques.11

// function sumArrays(numbers){
//     return numbers.reduce((acc, num) => acc+num, 0)
// }

// let Array = [1,2,3,4,5,6,7,8,9,10];
// console.log(sumArrays(Array));

// Ques.7

function square(num){
    return num*num;
}

console.log(square(3));
console.log(square(-9))

// Ques.5

function reverseString(str){
    return str;
}    

console.log(reverseString("Welcome!"));

//  Ques.2

let arr = [2,3,5,8,9]

let odd = arr.filter((el)=>{
    return el%2 !== 0
})

let even = arr.filter((el)=>{
    return el%2 == 0
})

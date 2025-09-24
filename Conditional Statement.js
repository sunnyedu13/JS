// Conditional Statements

// if

let age = 20;

if(age>=18){console.log("you can vote....!")
}

// else-if

let light = "blue";

if(light=="red"){console.log(`stop,the light is ${light}`)
}
else if(light=="yellow"){console.log(`Be ready, the light is ${light}`)
}
else if (light=="green"){console.log(`GO, the light is ${light}`)
}
else{ console.log(`the light is broken!! the light is reflecting non-condtional color ${light}`) 
}

// Nested condition

let marks = 45;

if(marks>=35){
    console.log("you are pass")
    if(marks>=90){
        console.log("grade: O+")
    }else if(marks>=80){
        console.log("garde:A+")
    }else if(marks>=60){
        console.log("grade: B+")
    }else if(marks>=45){
        console.log("grade: C")
    }else{console.log("grade: D")

    }
}else{console.log("you are fail.")

}

// Logical statements

//1.And(&&)-- all the conditional statement should be fullfilled
let aadhar = "present";
let pan = "";

if(aadhar == "present" && pan == "present"){
    console.log("you can apply for passport.")
}else {
    console.log("sorry! this service is not available for you")
 }

 //2. OR(||)--Any of the condition should be fillfilled.

 let aadhar2 = "";
 let pan2= "present";

 if(aadhar == "present" || pan == "present"){
    console.log("you can apply for passport.")
}else {
    console.log("sorry! this service is not available for you")
 }
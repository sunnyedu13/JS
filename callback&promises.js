// callbackhell 


let h1 = document.querySelector("h1");


function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor();
    }, delay)
}


changeColor("red", 2000, () => {
    changeColor("green", 2000, () => {
        changeColor("yellow", 2000)    
    })
})




function savetodb (data, success,  failure){
    let internetSpeed = Math.round(Math.random()*10);
    if(internetSpeed>4){
        success();
    }else{
        failure()
    }
}

savetodb("Edusphere", ()=>{
    console.log("success: The Data is saved");
    savetodb("hello world",()=>{
        console.log("success 2:The data is saved")
        savetodb("yo",()=>{
            console.log("sucess 3 : The Data is saved")
        },()=>{
            console.log("Failure 3: Weak connection")
        })
    },()=>{
        console.log("Failure 2: weak connection")
    })
}, ()=>{
    console.log("weak connnection")
})




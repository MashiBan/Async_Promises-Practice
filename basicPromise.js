const { setTimeout } = require("timers");

function delay(value){
    return new Promise((resolve) => {
       setTimeout(() => {
        console.log("Hii!!");
       },value)
    })
}



delay(5000);
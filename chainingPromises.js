const { resolve } = require("path");


function operation(value){
    return new Promise((resolve) => {
        resolve(value);
    }) 
    .then(result => result * 2)
    .then(result => result + 3)
    .then(result => result - 5)
    .then((result) => {
        console.log(result);
    })
}
           
operation(5);
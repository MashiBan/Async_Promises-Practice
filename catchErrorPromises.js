function operation(value){
    return new Promise((resolve, reject) => {
        resolve(value);
        reject("Error");
    })
    .then(result => result * 2)
    .then(result => result * 2)
    .then(result => result * 10)
    .then( result => console.log(result))
    .catch((error) => console.log(error));

}

operation(10);

async function higherOrderAsyncFunc(callback){
    const today = new Date();
    setTimeout(() => callback(), today.getUTCDate()*1000)
}

function callback(){
    console.log("Hi!");
}

higherOrderAsyncFunc(callback);

//here " higherOrderAsyncFunc " is not a async function it is just a async funciton setTimeout
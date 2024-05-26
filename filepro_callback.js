
const fs = require('fs');
const filename = 'questions.md'


function callback( data){
    console.log(data);
}

function readFileCallback(filename, callback){
    fs.readFile(filename, (err,data) => {
        if (err) throw err;
        else callback(data.toString());
    })
}

readFileCallback(filename, callback)
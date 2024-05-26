

arr = [2,1,3,2,4,6];

function mapArray(arr, callback){
    ans = arr.map(callback);
    ans.forEach(element => {
        console.log(element);
    });
}


function callback(element){
    return element*2;
}

mapArray(arr, callback);
arr = [12,6, 7, 15,14,20,2];

function filterArray(arr, callback){
    ans = arr.filter(callback);
}

function callback(element){
   return element >= 10
}
filterArray(arr, callback);
console.log(ans);
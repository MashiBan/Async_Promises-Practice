// Implement a function 'parallelFileOperation' that returns an array of size 2 with the first index containing the contents of the file 'a.txt' in UTF-8 encoding. If `a.txt` doesn't exist, then throw an error. The second element of the array contains 1 if the text `Hello!` is successfully written to the file `b.txt` and 0 if the write operation fails.


//array ans will contain -
/* arr[0] = contents of a.txt else throw error
 arr[1] = contain 1 if hello successfully written in b.txt else 0*/




const { log } = require('console');
const fs = require('fs').promises;
const firstFile = 'a.txt';
const secondFile = 'b.txt';


async function parallelFileOperation(firstFile, secondFile){
    ans = [];
    try{
        const data = await fs.readFile(firstFile, 'utf-8');
        ans.push(data);

        await fs.writeFile(secondFile, "Hello!", 'utf-8') 
        ans.push(1);
    }catch(err){
        ans.push(0)
    }
    return ans;
}

(async () => {
    const result = await parallelFileOperation(firstFile, secondFile);
    log(result);
})();
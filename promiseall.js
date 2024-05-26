const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
})
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
})

Promise.all([p1, p2, p3]).then((value) => console.log(value));
const delayedPromise =  num=> {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log('I am done!')
            resolve(num * num);
        }, 500);
    });
} 
const delayedPromise2 =  num=> {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log('I am done!')
            resolve(num * num);
        }, 500);
    });
} 
Promise.all([delayedPromise(6) , delayedPromise2(7)]).then((val) => {
    console.log(val);
});



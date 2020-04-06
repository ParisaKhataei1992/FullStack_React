const mixedArray = ['Matrix' , 1 , true , 2 ,false ,3]

const multiplyNumbers  =  mixedArray => {
    return new Promise(function(resolve, reject){
        if (mixedArray) {
            resolve(mixedArray.filter(f => typeof f === 'number').map(f => f * 5));
        } else {
            reject("no no no no")
        }
    });
}

multiplyNumbers(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));
 
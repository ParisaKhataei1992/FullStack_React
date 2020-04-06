function multiplyByEven(inputArr) {
    let outputArr = [];
    let evenNum = 1;
    
    for (i = 0; i < inputArr.length; i++){
        
        if (inputArr[i] % 2 == 0){
            evenNum = inputArr[i];
        }
        else {
            outputArr.push(inputArr[i] * evenNum);
        }
    }
    return outputArr;
}

module.exports = multiplyByEven;

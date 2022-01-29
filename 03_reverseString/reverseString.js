let str = 'hello'

const reverseString = function(str) {
    let stringLength = str.length
    let i = 0
    let stringArray = []

    for(i = 0; i < stringLength; i++){
        stringArray.push(str[i])
    }

    let revArray = stringArray.reverse()
    let x = 0
    let revString = ''
    
    for(x = 0; x < stringLength; x++){
        revString += revArray[x]
    }

    return revString

};

//npm test reverseString.spec.js

// Do not edit below this line
module.exports = reverseString;

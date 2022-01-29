let a = 'hey'
let b = 3

const repeatString = function(a, b) {

    let loopCount = b
    textString = ''
    
    if(loopCount >= 0){
        for(let i = 1; i <= b; i++){
            textString += a
        };
    }
    else{
        textString = "ERROR"
    }    
    return textString
};

// Do not edit below this line
module.exports = repeatString;

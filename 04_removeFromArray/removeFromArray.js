//1, 2, 3, 4], 3



const removeFromArray = function(inputArray, arg1, arg2, arg3, arg4) {
        
    for(i = 0; i < inputArray.length; i++){
        if(inputArray[i] === arguments[1]){
            inputArray.splice(i, 1)
            
        }
    }

    for(x = 0; x < inputArray.length; x++){
        if(inputArray[x] === arguments[2]){
            inputArray.splice(x, 1)
        }
    }

    for(y = 0; y < inputArray.length; y++){
        if(inputArray[y] === arguments[3]){
            inputArray.splice(y, 1)
        }
    }

    for(z = 0; z < inputArray.length; z++){
        if(inputArray[z] === arguments[4]){
            inputArray.splice(z, 1)
        }
    }
    
    return inputArray

};

//npm test removeFromArray.spec.js
// Do not edit below this line
module.exports = removeFromArray;

/*
for(i = 0; i < inputArray.length; i++){
    if(inputArray[i] == otherArg){
        inputArray.splice([i])
    }
}
*/
/*
for(i = 0; i < inputArray.length; i++){{
    if(arguments[i] == arguments[1]){
        
    }
}
*/

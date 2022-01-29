//sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
//sumAll(123, 1)
//sumAll(-10, 4))
//sumAll(10, "90")

const sumAll = function(arg1, arg2) {
    total = 0
        
    if( arguments[0] === arguments[0].toString() || arguments[1] === arguments[1].toString()){
        total = "ERROR"
    }
    else if(arguments[0] < arguments[1] && arguments[0] > 0 && arguments[1] > 0){
        for(i = 0; i <= arguments[1]; i++){
            total = total += i}
    }
    else if(arguments[0] > arguments[1] && arguments[0] > 0 && arguments[1] > 0){
        for(x = arguments[0]; x > 0; x--){
            total = total += x}
    }
    else{
        total = 'ERROR'
    }
    return total

};

//npm test sumAll.spec.js
// Do not edit below this line
module.exports = sumAll;

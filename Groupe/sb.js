var stringToNumber = function(str){
    return Number(str);
}

console.log(stringToNumber("2334213"))


var stringToNumber = function(str){
    return parseInt(str);
}


function numberToString(num) {
    return num.toString()
  }

console.log(numberToString(2334213))


function numberToString1(num) {
    return num + '';
}
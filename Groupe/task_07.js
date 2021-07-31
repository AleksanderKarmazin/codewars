/**
 *  My solution
 * https://www.codewars.com/kata/57a049e253ba33ac5e000212
 */

// function factorial(n) {
//     const array = [...Array(n).keys()].map(x=> x + 1)
//     // let result = 0
//     // for (let index = 0; index < array.length; index++) {
//     //     result = result * array[index]
//     // }
//     // return result
//     return array.reduce( (a, b) => a * b)
    
// }

const factorial = (n) =>  {
    if(n===0) return 1 
    else return n * factorial(n - 1)
}



console.log(factorial(10));



/**
*  My solution
*/

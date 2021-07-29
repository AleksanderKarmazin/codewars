/**
 *  My solution
 * https://www.codewars.com/kata/5168bb5dfe9a00b126000018
 */

 function solution(str){
    const arr = str.split('')
    const revArr = arr.reverse();
    return revArr.join(''); 
}

console.log(solution('world'));
console.log(solution('hello'));
console.log(solution(''));
console.log(solution('h'));


/**
*  My solution
*/

// Other solutions 
// 1 
function solution(str){
    return str.split('').reduceRight((after, before) => after += before, '');
  }

// 2
function solution(str){
    let n = ''
    for(let i of str){
      n = i+n
    }
    return n
  }




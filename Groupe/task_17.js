/**
 *  My solution
 * https://www.codewars.com/kata/57a5015d72292ddeb8000b31
 */

 function isPalindrome(line) {
  const arr = line.split('')
  function chunk (arr, len) {
    var chunks = [],
        i = 0,
        n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  } 
  const chunkedArr = chunk(arr, arr.length/2);
  const result = function compere([a,b] = chunkedArr) {
    const bReversed = b.reverse();
    const joinedA = a.join('')
    const joinedB = bReversed.join('')
    if (joinedA == joinedB) {
      return true
    }
    return false
  }
  return result() 
}

console.log(isPalindrome("dsgasgadgf"));
console.log(isPalindrome("1122211"));
// console.log(isPalindrome(line));
// console.log(isPalindrome(line));
// console.log(isPalindrome(line));


/**
*  My solution
*/


    // it("should identifies that a string is palindrome", function() {
    //     Test.assertEquals(isPalindrome("anna"), true);
    // });
    
    // it("should identifies that a string is not palindrome", function() {
    //     Test.assertEquals(isPalindrome("walter"), false);
    // });
    
    // it("should identifies that a number is palindrome", function() {
    //     Test.assertEquals(isPalindrome(12321), true);
    // });
    
    // it("should identifies that a number is not palindrome", function() {
    //     Test.assertEquals(isPalindrome(123456), false);
    // });
    
    // it("should identifies that a string is palindrome on punctuation", function() {
    //     Test.assertEquals(isPalindrome("."), true);
    // });
    
    // it("should identifies that a string is palindrome on punctuation", function() {
    //     Test.assertEquals(isPalindrome(".!!."), true);
    // });
// Other solutions 
// 1 

 
  
     
/**
 *  My solution
 * https://www.codewars.com/kata/55f2b110f61eb01779000053
 */
 function getSum(a,b){
   if(a === b) {
      return a 
   }
   const finalArr = [] 
   function arrFromNumber(n) {
      if (n === 0) {
         return 0 
      } else if (n < 0) {
         const minus = n * -1
         const arr = [...Array(minus).keys()].map(x=> (x + 1) *-1)
         let result = 0
         for (let index = 0; index < arr.length; index++) {
             result = result + arr[index] 
         }
         return result
      }
      const arr = [...Array(n).keys()].map(x=> x + 1)
      let result = 0
      for (let index = 0; index < arr.length; index++) {
          result = result + arr[index] 
      }
      return result
  }

  finalArr.push(arrFromNumber(a))
  finalArr.push(arrFromNumber(b))

  let result = 0
  for (let index = 0; index < finalArr.length; index++) {
      result = result + finalArr[index] 
  }
  return result 
}

/**
*  My solution
*/




// console.log(getSum(1,0));
// console.log(getSum(1,2));
// console.log(getSum(0,1));
// console.log(getSum(1,1));
// console.log(getSum(-1,0));
// console.log(getSum(-1,2));
console.log(getSum(0,-1));
console.log(getSum(0,1));
console.log(getSum(-394,-511));


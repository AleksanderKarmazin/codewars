
// My solution
/**
 *  https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
 */

const array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];
  



  function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.forEach(element => {
      if(element){
        count++
      }
    });
    return count
  }


console.log(countSheeps(array1));

 

// Other solutions 
// 1 

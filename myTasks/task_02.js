
// My solution
/**
 *  https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
 */

const x = 'john McClane'

// 'McClane john'


function nameShuffler(str){
  //Shuffle It
  const arr = str.split(' ')
  const revArr = arr.reverse();
  return revArr.join(' '); 
}


console.log(nameShuffler(x));




// Other solutions 
// 1 

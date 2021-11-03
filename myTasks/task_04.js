
// My solution
/**
 *  
 */

const str = 'eloquent'
//  'loquen'
  

   

function removeChar(str){
  const arr = str.split('')
  arr.pop()
  arr.shift()
  const u = arr.join(''); 
  return u
 };

console.log(removeChar(str));

 

// Other solutions 
// 1 
function removeChar(str) {
  return str.slice(1, -1);
}
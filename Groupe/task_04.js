/**
 *  My solution
 * https://www.codewars.com/kata/568dcc3c7f12767a62000038
 */

function setAlarm1(employed, vacation){
      if(employed == true && vacation==true){
          return false;
      }else if(employed == false && vacation == false){
          return false;
      }else if(employed == false && vacation == true){
          return false;
      }else {
          return true;
      }
}
/**
 *  My solution
 */


function setAlarm2(employed, vacation){
  return employed && !vacation;
}

console.log(setAlarm1(false, false));
console.log(setAlarm2(false, false));


// Other solutions 
// 1 
const setAlarm = (employed, vacation) => employed && !vacation;

// 2
function setAlarm(employed, vacation){
    return (employed && !vacation) ? true : false;
  }

// 3
function setAlarm(employed, vacation){
    if (employed==true && vacation== true ) { return false }
    if (employed==false && vacation== true ) { return false }
   if (employed==false && vacation== false) { return false }
   if (employed==true && vacation== false ) { return true }
   }

//  4
function setAlarm(employed, vacation){
    if (employed !== false) {
      if (vacation == false) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }



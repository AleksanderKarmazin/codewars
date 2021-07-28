/**
 *  My solution
 * https://www.codewars.com/kata/57ee99a16c8df7b02d00045f
 */

 "use strict";
 const emptyArr = [[], []]
 const fullArr = [[3, 2, 1],[], [7, 9, 8], [6, 4, 5]]
 
 
 
 function flattenAndSort000000(array) {
//     let finalArr = []
//     array.forEach(innerArr => {
//         if (innerArr.length == 0) {
//             finalArr.forEach(elFinale => {
//                 if(elFinale.length === 0) {
//                     return finalArr;
//                 }
//                 // finalArr.push(innerArr) 
//             });
//             finalArr.push(innerArr)
//         } 
//             innerArr.forEach(el => {
//             finalArr.push(el) 
//         });
//     });
//    return finalArr;
//  }
 
 let finalArr = []
 for (let index = 0; index < array.length; index++) {
     const innerArr = array[index];
     if (!innerArr.length) { 
         for (let index = 0; index < finalArr.length; index++) {
             const elFinale = finalArr[index];
             if(!elFinale.length) {
                break;
            } 
            finalArr.push(innerArr)
         }
     }
            innerArr.forEach(el => {
            finalArr.push(el) 
        });
 }
 return finalArr.sort((a, b) => a - b);;

}

console.log(flattenAndSort(emptyArr));
console.log(flattenAndSort(fullArr));

/**
*  My solution
*/
function flattenAndSort(array) {
     let finalArr = []
     for (let index = 0; index < array.length; index++) {
         const innerArr = array[index];
         if (!innerArr.length) { 
             for (let index = 0; index < finalArr.length; index++) {
                 const elFinale = finalArr[index];
                 if(!elFinale.length) {
                    break;
                } 
                finalArr.push(innerArr)
             }
         }
                innerArr.forEach(el => {
                finalArr.push(el) 
            });
     }
     return finalArr.sort((a, b) => a - b);;
    
    }

/**
*  My solution
*/
// Test.assertSimilar(flattenAndSort([]), []);
// Test.assertSimilar(flattenAndSort([[], []]), []);
// Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
// Test.assertSimilar(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// Test.assertSimilar(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);

// Other solutions 
// 1 
"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}

// 2
function flattenAndSort(array) {
    return array
      .reduce((result, current) => [...result, ...current],[])
      .sort((a, b) => a - b)
      ;
}

// 3
"use strict";

function flattenAndSort(array) {
  var newArray = [];
  for(var i =0;i<array.length;i++)
  {
    for(var j=0;j<array[i].length;j++)
    {
      newArray.push(array[i][j]);
    }
  }
    
  return newArray.sort((a,b) =>  a-b);
}


// 4
function flattenAndSort(array) {
    return flatten(array).sort((a, b) => a - b);
  }
  
  function flatten(array) {
    return array.reduce(function(acc, el) {
      return acc.concat(Array.isArray(el) ? flatten(el) : el);
    }, []);
}

// 5
function flattenAndSort(a) {
    "use strict";
    return JSON.parse(JSON.stringify([].concat(...a))).sort((a, b) => a - b);
}

// 6 
const flattenAndSort = array => array
  .reduce((a, c) => [...a, ...c], [])
  .sort((a, b) => a - b);


// 7
"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  let flatArray = [].concat(...array);
  array = flatArray.sort((a,b) => a -b);
  return array;
}

// 8
function flattenAndSort(array) {
    let nov = [];
    array.forEach((item)=>{
      nov.push(...item.sort())
    })
    return nov.sort((a,b) => a-b);
}

// 9
"use strict";

function flattenAndSort(arr) {
  return !Array.isArray(arr) ? arr : arr.reduce((init, el) => init.concat(flattenAndSort(el)), []).sort((a, b) => a - b)
}

// 10
"use strict";

const flattenAndSort = array =>
    array
    .reduce((acc, el) => {
        acc.push(...el);
        return acc;
    }, [])
    .sort((a, b) => a - b);

// 11
const flattenAndSort = a => Array.prototype.concat(...a).sort((x, y) => x - y);


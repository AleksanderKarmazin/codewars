/**
 *  My solution
 * https://www.codewars.com/kata/57a6633153ba33189e000074
 */

 const examples = [
    ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
    ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
    ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],
];
const text = "abracadabra"
const text2 = "233312"

const orderedCount = function (text) {
    let arr = text.split('');
    let arrCount = [];
    let finalArr = [];
    let charCount = 0;
    arr.forEach(el1 => {
        arr.forEach(el2=> {
            if(el1===el2) {
            charCount++
            }
        });
        arr = arr.filter(item => item !== el1)
        arrCount.push(charCount)
        charCount=0
    });
    return arrCount;
  } 
  
//   console.log(orderedCount(text));
/**
*  My solution
*/


const chars = "slovo"
let  t = {}
for ( id in chars) {
    if(Object.keys(t).includes(chars[id])) {
        t[chars[id]] ++
    } else {
        t[chars[id]]=1   
    }
}
console.log(Object.entries(t)); 


/**
 *  My solution
 * https://www.codewars.com/kata/57a6633153ba33189e000074
 */

 const examples2 = [
    ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
    ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
    ["233312", [['2', 2], ['3', 3], ['1', 1 ]]],
];


const orderedCount1 = function (chars) {
    let  t = {}
    for ( id in chars) {
        if(Object.keys(t).includes(chars[id])) {
            t[chars[id]] ++
        } else {
            t[chars[id]]=1   
        }
    }
    return Object.entries(t);
  }
/**
*  My solution
*/
 console.log(orderedCount1(text));
 console.log(orderedCount1(text2));


 const orderedCount2 = function (s) {
    let map = new Map();
    for (let index = 0; index < s.length; index++) {
        let current = s[index];
        // const mapElement = map[index];
        if (map.has(current)) {
            map.set(current, map.get(current) + 1);
        } else {
            map.set(current, 1);
        }
    }
    let obj = Object.fromEntries(map.entries())
    const arr = Object.entries(obj)
    return arr;
  }
console.log(orderedCount2(text));
console.log(orderedCount2(text2));


function count(string) {
    let resultObj = string.split("").reduce(
      (acc, el) => {
        if(acc.hasOwnProperty(el))
          acc[el]++;
        else
          acc[el] = 1;
        return acc;
      }, {}
    )
    return Object.entries(resultObj)
  }

  console.log(count(text))
  console.log(count(text2))
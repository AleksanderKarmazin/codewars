/**
 *  My solution
 * https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
 */

function monkeyCount(n) {
    const arr = [...Array(n).keys()].map(x=> x + 1)
    return arr
}

console.log(monkeyCount(4));


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

/**
 *  My solution
 */

// Other solutions 

// 1 
function monkeyCount(n) {
    var monkeys = [];
    for(var i=1; i<n+1; i++){
      monkeys.push(i);
    }
    return monkeys;
}

// 2 
function monkeyCount(n) {
    return Array.from({length:n}, (_,i)=>i+1)
}

// 3 
function monkeyCount(n) {
    for (var i = 0, arr = []; i < n; arr.push(++i));    
    return arr;
}

// 4 
function monkeyCount(n) {
    var num = [];
    for(i=1;i<=n;i++)
    {
     num.push(i);
    }
    return num;
}

// 5
function monkeyCount(n) {
    return [...Array(n+1).keys()].slice(1);
}

// 6 
var monkeyCount=n=>[...Array(n)].map((v,i)=>i+1)

// 7
function monkeyCount(n) {
    return [...new Array(n+1).keys()].filter( a => a > 0 );
}

// 8 
// recursive solution
const monkeyCount = n => n ? [...monkeyCount(n - 1), n] : []

// 10
function monkeyCount(n) {
    var res = [];
    for(i = n; i>0; i--) {
      res.unshift(i);
    }
    return res;
  }


//   11 
const monkeyCount = n =>
  Array(n)
    .fill(0)
    .map((e, i) => i + 1);


//12
function monkeyCount(n) {
    var arr = [...Array(n+1).keys()];
    return arr.filter((num)=> num != 0); 
}

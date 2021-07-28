/**
 *  My solution
 * https://www.codewars.com/kata/558fc85d8fd1938afb000014
 */
 const input = [19, 5, 42, 2, 77] 
 const output = 7

 function sumTwoSmallestNumbers(input) {  
    const array = input.sort((a, b) => a - b);
    let result = 0
    for (let index = 0; index < 2; index++) {
        // const element = array[index];
        result = result + array[index] 
    }
    return result
  }



const funcOutput = sumTwoSmallestNumbers(input) 
console.log(funcOutput)
console.log(output === funcOutput)
/**
*  My solution
*/

// Other solutions 
// 1 
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};

// 2 
function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
}

// 3
const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

// 4
function sumTwoSmallestNumbers(numbers) {  
    var lowest = numbers.sort(function(a, b){return b-a}).slice(-2);
    return lowest.pop() + lowest.pop();
};

// 5
function sumTwoSmallestNumbers(numbers) {  
    const [a, b] = [...numbers].filter(e => e>= 0).sort((a,b) => a - b);
    return a + b;
  };

// 6 
function sumTwoSmallestNumbers(numbers) {  
    const x = numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, cur) => acc + cur);
    
    return x;
  };

// 7 
function sumTwoSmallestNumbers(n) {  
    let j=0;
    let k=-1;
    for (let i=1; i<n.length; i++){
      if (n[i] < n[j]){
        k=j;
        j=i;
      }else if (k === -1 || n[i] < n[k]){
        k=i;
      }
    }
    return n[j]+n[k];
}

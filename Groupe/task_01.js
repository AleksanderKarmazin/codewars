
// My solution
/**
 *  https://www.codewars.com/kata/50654ddff44f800200000004
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function multiply(a, b){
    return  a * b
}


// Other solutions 
// 1 
function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
      return 0;
    }
    return a * b;
}

// 2 
multiply = (a, b) => a * b;

// 3
function multiply(a, b){
    if (undefined == a || undefined == b
      || isNaN(a) || isNaN(b))
      throw new Error('Both arguments should be numbers')
    return a * b
}

// 4
function multiply(a, b){
    // typeof === number returns false for null or empty values
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    } else {
      return 'Please enter 2 numbers';
    }
}

// 5
function multiply(a, b){
    if (isNaN(a) || isNaN(b)) throw "invalid args";
    return a * b;
}

// 6 
function multiply(a, b){
    if (b < 0) { b = -b; a = -a; }
    for (var i = 0, c = 0; i < b; ++i) {
      c += a;
    }
    return c;
}

// 7 
function multiply(a, b){
    const numA = `${a}`.split('').map(Number)
      const numB = `${b}`.split('').map(Number)
      const numArr = []
      let t = 1
      while(numA.length> 0){
          let num = []
          let carry = 0
          let c = numA.pop()
          for(let i=numB.length-1; i>=0; i--){
              let n = c*numB[i] + carry
              num.push(n%10)
              carry = Math.floor(n/10)
          }
          if(carry>0){
              num.push(carry)
          }
          let a = +num.reverse().join('') * t
          numArr.push(a)
          t *= 10
      }
  
      return numArr.reduce((acc, cur) => acc+cur, 0)
}


// 8
function multiply(a, b){
    //at first checking if two arguments were passed
      if(isPassed(a) && isPassed(b)) return 0;
    //the second we need to check if function's two arguments are number(using auxiliary function)
      if(!isNumber(a) && !isNumber(b)) return 0;
      
       return a * b;
    };
    
    function isNumber(a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    };
    
    function isPassed(a) {
    return a === undefined;
};

// 9 
const multiply = (...arg) => arg.reduce((num, arr) => arr * num)

// 10
function multiply(a, b, c){
    if (!c) {
      c = a;
    }
  
    if (a === 0 || b === 0) {
      return 0;
    }
  
    if (b === 1) {
      return c;
    }
  
    return multiply(a, --b, c + a);
}

// 11
function multiply(a, b){
    //at first we need to check if function's two arguments are number(using auxiliary function)
      if(!isNumber(a) && !isNumber(b)) return 0;
      
       return a * b;
    }
    
    function isNumber(a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
}

// 12
function multiply(a, b){
    let answer = 0;
    for(let i=1;i<=a;i++) {
      for(let j=1;j<=b;j++) {
        answer++;
      }
    }
    return answer;
}


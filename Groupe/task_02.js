/**
 *  My solution
 */
const str = "hello world!"
const str2 = "yoda doesn't speak like this"

function reverseWords(str){
    const arr = str.split(' ')
    const revArr = arr.reverse();
    return revArr.join(' '); 
  }

console.log(reverseWords(str2), str2);


// Other solutions 

// 1 
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}

// 2 
const reverseWords = (str) => str.split(" ").reverse().join(" ");

// 3
const reverseWords = s => s
  .split` `
  .reverse()
  .join` `;

// 4
function reverseWords(str){
  var reverse = [];
  var words = str.split(" ");
  for(let i=words.length-1; i>=0; i--){
    reverse.push(words[i]);
    
  }
  return reverse.join(" ")
}

// 5
function reverseWords(str){
    let count_letters= 1;
    let new_string = "";
    for(let i = str.length-1; i >=0 ;i--){
      if(str[i]===' '|| i==0){
        if(i!=0)
          new_string+= str.substr(i+1,count_letters-1) + ' ';
        else
          new_string+= str.substr(i,count_letters);
        console.log(new_string);
        count_letters=1;
      }else
        count_letters++;
    }
    console.log(new_string);
    return new_string;
  }

// 6
function reverseWords(str){
    const arr = str.split(' ')
    const n = []
    for(let i=0; i < arr.length; i++){
      n.unshift(arr[i])
    }
    return n.join(' ') 
}

// 7
function reverseWords(str){
    var array = str.split(' ');
    for (var  i = 0; i < array.length/2; i++) {
      var a = array[i];
      array[i] = array[array.length - i - 1]
      array[array.length - i - 1] = a;
    }
    return array.join(' '); // reverse those words
}

// 8
function reverseWords(str){
    let arr = []
    let temp = ""
    for (let i = 0; i <= str.length; i++) {
      if (str[i] === " " || !str[i]) {
        arr.push(temp)
        temp = ""
      } else {
        temp += str[i]
      }
    }
    
    let output = ""
    for (let i = arr.length-1; i>=0; i--) {
      if (i === 0) {
        output += arr[i]
      } else {
        output += `${arr[i]} `
      }
      
    }
    return output
}

// 9 
function reverseWords(str){
    str =  str.split(' ').reduceRight(function(sentence, next){
      return sentence + " " + next;
    });
    return str; // reverse those words
}

// 10 
function reverseWords(str){
    return str.split(" ").reduce((a,v)=>[v].concat(a), []).join(" ");
}

// 11
function reverseWords(str){
    var arr = str.split(" ");
    for (var i = arr.length - 1; i >= 0; i--){
      arr.push(arr[i]);
      arr.splice(i,1);  
    };
    return arr.join(" ");
}
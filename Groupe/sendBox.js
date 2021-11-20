const text = "233312"
const text2 = "dshgfhjsdggghjfdgjghfjdsrfghdfsdashdfghdfhfgdfgjghdffghsdawergdfshgfdhdghdfghdsfdfhsdfhgfjsdfghjsfdfghjsgfjdddfhfgjsdfghjdfgjdgfjfgjdfgjjhdfjfgj"


// Some comments

const orderedCount = function (s) {
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
console.log(orderedCount(text));


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
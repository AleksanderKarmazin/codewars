const obj = {
    a:1,
    b: {
       c:2, 
       i: {
        v:75    
       }
    }
}

// const obj3 = {
//     a:1,
//     b: {
//        c:2 
//     }
// }
// const obj2 = Object.assign({}, obj)

// const obj2 = JSON.parse(JSON.stringify(obj));
const obj2 = cloneObject(obj);

function cloneObject(obj) {
    var clone = {};
    for(var i in obj) {
        if(obj[i] != null &&  typeof(obj[i])=="object")
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}

// var obj = { 
//   a: 1,
//   b: { 
//     c: 2
//   }
// }
// var newObj = cloneObject(obj);



console.log(obj === obj2, 'Сравнение объектов без вложенности');
// console.log(obj === obj3, 'Сравнение объектов без вложенности 0 and  3 ');
console.log(obj.b === obj2.b, 'Сравнение объектов вложенных объектов');
console.log(obj.b.i === obj2.b.i, 'Сравнение объектов вложенных объектов');


// const a = {
//     string: 'string',
//     number: 123,
//     bool: false,
//     nul: null,
//     date: new Date(),  // stringified
//     undef: undefined,  // lost
//     inf: Infinity,  // forced to 'null'
//     re: /.*/,  // lost
//   }
//   console.log(a);
//   console.log(typeof a.date);  // Date object
//   const clone = JSON.parse(JSON.stringify(a));
//   console.log(clone);
//   console.log(typeof clone.date); 


// Deep copy an array of objects (two or more levels - reference pointers):

var arr1 = [{object:'a'}, {object:'b'}];
// Write a custom function (has faster performance than $.extend() or JSON.parse):

function copy(o) {
   var out, v, key;
   out = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       out[key] = (typeof v === "object" && v !== null) ? copy(v) : v;
   }
   return out;
}

copy(arr1);
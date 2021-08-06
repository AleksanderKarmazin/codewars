// console.log("object")


const omap = (obj, fn) => Object.keys(obj)
    .reduce((res, key) => {
        const [prop, val] = fn(key, obj[key])
        res[prop] = val;
        return res;
    }, {})


const inst = (prev, prop, val) => ({...prev, [prop]: val})
const omap = (obj, fn) => Object.keys(obj)
        .reduce((prev, key) => inst(prev, ...fn(key, obj[key])) , {})



const marcus3 = {
    firstName: marcus,
    lastName: lastM 
}


var keys = []

const findKeys = (object, prevKey = '') => {
  Object.keys(object).forEach((key) => {
    const nestedKey = prevKey === '' ? key : `${prevKey}.${key}`

    if (typeof object[key] !== 'object') return keys.push(nestedKey)

    findKeys(object[key], nestedKey)
  })
}

findKeys(object)

console.log(keys)
// Array.prototype.map(callback[, thisArg])

const myArr = [];

const newMyArr = myArr.map((cur, index, array) => {
    return this * 2
},10);

console.log(newMyArr);
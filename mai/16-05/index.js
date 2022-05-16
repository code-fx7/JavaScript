// 3. Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
let first = { firstName: "John", lastName: "Vooo" };
let last = { lastName: "Smith" };
// Expected output:
// {firstName: "John", lastName: "Smith"}

const mergeObj = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const mergeObj2 = (obj1, obj2) => Object.assign(obj1, obj2);

//----------

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
let person = {
  name: "John",
  job: "teacher",
};
// Expected Output:
// {"John": name, "teacher": job}

const switchObj = (obj) => {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }

  return newObj;
};

console.log(switchObj(person));

//----------

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]

const objToArr = (obj) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  console.log(values);
  return [keys, values];
};
console.log(objToArr({ a: 1, b: 2, c: 3 }));

//----------

// Binary converter, convert any given number to binary.
// Bounce : your code should be using one line only
// Example :
// 20 -> 10100
// 10-> 1010
// 44-> 101100

// Op1
// const binary = (num)=> num.toString(2);
// console.log(binary(20));
// console.log(binary(10));
// console.log(binary(44));

// Op2
const binary2 = (num) => {
  return parseInt(num, 2);
};
console.log(binary2(20));
console.log(binary2(10));
console.log(binary2(44));

//----------

// A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
//isPandigital(0123456789) -> true


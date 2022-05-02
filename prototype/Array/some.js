// find
//               0     1     2     3     4
const emojis = ["😎", "😎", "😎", "😎", "😎", "🤓", "🤓", "🤓", "🤓", "❤️", 1];

// All advanced array methods, reduce is not
// arr.method((element, index, array)=> {return "something"})

console.log(emojis.some((ele) => ele == "😎")); // true/false

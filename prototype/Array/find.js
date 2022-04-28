// find
//               0     1     2     3     4
const emojis = ["😎", "😎", "😎", "😎", "😎", "🤓", "🤓", "🤓", "🤓", "❤️", 1];
const findEmojiResult = emojis.find((ele) => ele == "🤓");
const filterEmojiResult = emojis.filter((ele) => ele == "🤓");
console.log("----- find -----");
console.log(findEmojiResult);
console.log("----- filter -----");
console.log(filterEmojiResult);
// All advanced array methods, reduce is not
// arr.method((element, index, array)=> {return "something"})

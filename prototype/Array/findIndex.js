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
console.log("----- findIndex -----");
// findIndex
const emojiFindIndex = emojis.findIndex((ele) => ele == "Cool");
console.log(emojiFindIndex);
// indexOf
const emojiIndexOf = emojis.indexOf("Cool");
console.log(emojiIndexOf);
console.log("----- some -----");
// some
console.log(emojis.some((ele) => ele == "😎")); // true/false
console.log("----- every -----");
// every
console.log(emojis.every((ele) => ele == "😎")); // true/false

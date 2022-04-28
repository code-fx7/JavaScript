const filteredEmoji = emojis.filter((emoji) => {
  return emoji == "😈";
});
console.log(filteredEmoji);
const words = ["this", "is", "longText", "somethingLong", "jo"];
const filteredWords = words.filter((word) => word.length == 2);
console.log(filteredWords);
const jobs = [
  { title: "teacher", salary: 1500, location: "Amsterdam", remote: true },
  { title: "IT", salary: 2400, location: "LA", remote: true },
  { title: "Web developer", salary: 1800, location: "London", remote: false },
];
const filteredJob = jobs.filter(
  (job) => job.salary >= 1500 && job.salary <= 2000
);
console.log(filteredJob);

//----------

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

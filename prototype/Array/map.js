const cities = ["Berlin", "Paris", "LA", "NY"];
const newCity = cities.map((city, num) => `you live in ${city}`);
console.log(newCity);

//----------

const emojis = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];
const discounts = [22, 3, 45, 6];
// map
// Have 4 toDos
// 1. method
// 2. callBack
// 3. loop
// 4. make a copy for the original array
const emojiCopy = emojis.map((emoji, index) => {
  return `hi ${emoji} ${index}`;
});
console.log(emojiCopy);
const copyDiscounts = discounts.map((discount) => discount * 22);
console.log(copyDiscounts);
const users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
// const greeting = users.map((user) => `Hey ${user.name}, ${user.age} years old`);
const greeting = users.map((user) => {
  return { something: `Hey ${user.name}, ${user.age} years old` };
});
console.log(greeting);
// const yorNewCopy = yourOriginalArray.map((element,index)=>{return "your new index value"});
// const emojis = ["😉", "😉", "😉", "😉", "😎", "😎", "🤓"];

const numArr = [1, 1, 1, 1, 1, 1];
const sumResult = numArr.reduce((acc, cur) => acc + cur);
console.log(sumResult);

//----------

// old school
const numbersArray = [3, 5, 8];
let box = 0;
for (let i = 0; i < numbersArray.length; i++) {
  let cur = numbersArray[i];
  box = box + cur;
}
console.log(box);

// Prof
const resultSum = numbersArray.reduce((box, cur) => {
  return box + cur;
}, 0);
console.log(resultSum);

//----------

const countLetter = (str) =>
  str.split("").reduce((box, cur) => {
    box[cur] = box[cur] ? box[cur] + 1 : 1;
    return box;
  }, {});

console.log(countLetter("tree"));

//-----------

const itemsList = [
  { title: "Qual lock", price: 80 },
  { title: "shoe", price: 139 },
  { title: "light", price: 120 },
];
const totalCost = itemsList.reduce((acc, item) => acc + item.price, 0);
console.log(`You have to pay : ${totalCost}€`);

//----------

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
function sumOfTheScrabble(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].score;
  }
  return result;
}
console.log(sumOfTheScrabble(scrabble));
const sumOfScore = (arr) => arr.reduce((result, cur) => result + cur.score, 0);
console.log(sumOfScore(scrabble));

let age = 37;
console.log(age < 16 ? "serve butter beer" : "serve beer");

let startOfRange = 50;
let endOfRange = 99;
let userFirstNum = 40;
let userSecondNum = 49;
let userThirdNum = 50;

if (
  (userFirstNum >= startOfRange && userFirstNum <= endOfRange) ||
  (userSecondNum >= startOfRange && userSecondNum <= endOfRange)
) {
  console.log("Cool");
} else {
  console.log("No");
}

if (
  (userFirstNum >= startOfRange && userFirstNum <= endOfRange) ||
  (userSecondNum >= startOfRange && userSecondNum <= endOfRange) ||
  (userThirdNum >= startOfRange && userThirdNum <= endOfRange)
) {
  console.log("Cool");
} else {
  console.log("No");
}

let text = "Nancy";
console.log(text.substring(0, 2));
if (text.substring(0, 2) == "Py") {
  console.log(text);
} else {
  console.log("Py" + text);
}

console.log(text.substring(0, 2) == "Py" ? text : "Py" + text);

let firstNum = 1;
let secondNum = 1;
let sum = firstNum + secondNum;

if (firstNum == secondNum) {
  console.log(sum * 3);
} else {
  console.log("Sorry they are not the same");
}

console.log(
  firstNum == secondNum
    ? (firstNum + secondNum) * 3
    : "Sorry they are not the same"
);

function isBigger(userNum) {
  return userNum >= 55;
}

function isBigger2(userNum) {
  console.log(userNum >= 55);
}

console.log(isBigger(55));
console.log(isBigger(4));
console.log(isBigger(2));
console.log(isBigger(51));
console.log(isBigger(2.2));
isBigger2(23);
isBigger2(65);

console.log(typeof (1 == 50));

let firstName = "Christoph";
let myAge = "37";

if (myAge < 13) {
  console.log(`${firstName} is child`);
} else if ((myAge >=13) && (myAge < 20)) {
  console.log(`${firstName} is teenager`);
} else if ((myAge >=20) &&(myAge <= 30)){
  console.log(`${firstName} is young adult`);
} else {
  console.log(`${firstName} is adult`);
}

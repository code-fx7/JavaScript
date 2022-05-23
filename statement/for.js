// Email check, write a program that checks yours input if it's a correct email
// emailCheck("Hi@hh.co") -> true
// emailCheck("Hihh.co") -> false
// emailCheck("@hh.co") -> false

const validate = (str) => {
  let at, dot;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "@") at = i;
    if (str[i] === ".") dot = i;
  }
  if (at > 0 && dot > at) {
    return `${str} is valid.`;
  } else {
    return `${str} is invalid`;
  }
};
console.log("------");
console.log(validate("contact@hadi-nsreeny.com"));
console.log(validate("@hadi-nsreeny.com@"));
console.log(validate("t@hadi-nsreenycom"));

const check = (num) => {
  if (num < 5) {
    console.log("cool");
  }
  if (num == 5) {
    console.log("This is super cool");
  }
  if (num != 5) {
    console.log("This is Nice");
  }
};
check(4);

//----------
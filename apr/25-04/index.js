const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
};

// Write the command to add the language "Go" to the end of the languages array.

programming.languages.push("Go");

// Using a loop, console.log all of the values in the programming object.

for (const key in programming) {
  console.log(programming[key]);
}

// Write a command to add a new key called isFun and a value of true to the programming object.

programming["isFun"] = true;
console.log(programming);

// Using a loop, iterate through the languages array and console.log all of the languages.

for (const element of programming.languages) {
  console.log(element);
}

// Using a loop, console.log all of the keys in the programming object.

for (const key in programming) {
  console.log(key);
}

const keysInProgramming = Object.keys(programming);
console.log(keysInProgramming);

for (const element of keysInProgramming) {
  console.log(element);
}

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.

programming.giveItTry = function () {
  if (programming.isChallenging && programming.isRewarding) {
    return `Learning the programming languages: ${programming.languages} is rewarding and challenging.`;
  }
};

console.log(programming.giveItTry());

// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

console.log(programming);

// The Recipe Card
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const recipe = {
  title: "Mole",
  serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};

console.log(recipe.title);
console.log(recipe.ingredients);
//----------

// The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

//----------

// Get Names. Create a function that takes an array of objects containing students' names e.g. {name: "John"}, and returns an array of just student names.
// Example:
// getNames([{ name: "Jane" },
//        { name: "Jack" },
//        { name: "John" }
//    ])
// ➞ ["Jane", "Jack", "John"]

// function getNames(arr) {
//     return
// }
//----------

const countLetter = (str) => {
  const arr = str.split("");
  const result = arr.reduce((box, cur) => {

// Op prof
// box[cur] = box[cur] ? box[cur] +1 : 1;

// Op2
// box[cur] = box.hasOwnProperty(cur) ? box[cur] +1 : 1;

// Op3
if(box.hasOwnProperty(cur)) {
    box[cur] +=1;
} else {
    box[cur] = 1;
}
return box;

// Op4
//     if (box[cur]) {
//       box[cur] += 1;
//     } else {
//       box[cur] = 1;
//     }
    
return box;
  }, {});
  return result;
};

console.log(countLetter("tree"));

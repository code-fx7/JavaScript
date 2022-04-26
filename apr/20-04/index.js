const personObj = {
  firstName: "Christoph",
  lastName: "Feliksiak",
  age: 37,
  city: "Südbrookmerland",
  mail: "code-fx@mail.de",
  kids: ["Ben", "Milian", "Nele"],
};

// console.log(personObj.age);

//-----------

// Create a function that returns an array of the properties of a javascript object.
//   Example
const person = {
    name: "Mike",
    class: "4A",
    course: "English",
  };
  // Expected output:
  //   ["name", "class", "course"]
//   function display() {
//       console.log(Object.keys(person));
//   }
//   display();

  // Given the following object
  const student = {
    firstName: "Zain",
    lastName: "Oil",
    class: "D05",
  };
  // Create a method that prints the following: "Zain Oil a student in class D05"

  display1:function() {
      console.log(`${this.firstName + " " + this.lastName}, is a student in class ${this.class}`);
  };
student.display1();

//----------
  // Get Values. Create a function that returns an array of all values of an object’s properties.
  //   Examples:
  const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
  };

//   function display2() {
//       console.log(Object.values(getObjectValues));
//   }
//   display2();

  //----------
  // Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
  // Examples:
  // (4, { min: 0, max: 5 }) ➞ true
  // (4, { min: 4, max: 5 }) ➞ true
  // (4, { min: 6, max: 10 }) ➞ false
  // (5, { min: 5, max: 5 }) ➞ true

  function givenRange (num, obj) {
      if (num >= obj.min && num <= obj.max) {
        console.log(true);
      } else {
          console.log(false)
      }
    };

  givenRange(4, { min: 0, max: 5 });
  givenRange(4, { min: 4, max: 5 });
  givenRange(4, { min: 6, max: 10 });
  givenRange(5, { min: 5, max: 5 });

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
  weißes_häkchen
  augen
  erhobene_hände
  
  
  
  
  
  14:12 Uhr
  // Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
  // Examples:
  // {} ➞ true
  // {a: 1} ➞ false
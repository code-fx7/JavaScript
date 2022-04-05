// for (let i = 100; i <= 1000; ) {
//   console.log(i);
//   i += 100;
// }

let str1 = "";
for (let i = 100; i <= 1000; ) {
  str1 += `${i} `;
  i += 100;
}

let str2 = "";
for (let i = 1; i <= 4; i++) {
  str2 += `${i} ${i} ${i} `;
}

// for (let i = 0; i <= 10; ) {
//   console.log(i);
//   i += 2;
// }

let str3 = "";
for (let i = 0; i <= 10; ) {
  str3 += `${i} `;
  i += 2;
}

// for (let i = 3; i <= 15; ) {
//   console.log(i);
//   i += 3;
// }

let str4 = "";
for (let i = 3; i <= 15; ) {
  str4 += `${i} `;
  i += 2;
}

// function display() {
//   console.log("You are cool");
// }

// for (let i = 0; i <= 10; i++) {
//   console.log("Nice");
//   for (let j = 0; j <= 10; j++) {
//     console.log("Something");
//   }
// }

// 0 1 2 3 0 1 2 3 0 1 2 3
// let str5 = "";
// for (let i = 1; i <= 3 ; i++) {
//   for (let j = 0 ; j <= 3; j++) {
//   str5 += `${j} `;
// }
//  }
//  console.log(str5);

// 1 1 1 2 2 2 3 3 3 4 4 4 5 5 5
// let str6 = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 3; j++) {
//     str6 += `${i} `;
//   }
// }

// console.log(str6);

//

let str7 = "";
for (let i = 1; i <= 4; i++) {
  str7 += `+ `;
  console.log(str7);
}

for (let i = 4; i >= 1; i--) {
  console.log("*".repeat(i));
}

// Addition. Write a program to add up the numbers 1 to 20.
for (let i = 1; i <= 20; i++) {
  console.log(`${i} + 1 = ${i + 1} `);
}

let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log("sum :", sum);

// There are i bottles of beer on the wall. Write a program that will output, "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall" up until there are five bottles.
// for (let i = 1; i <= 1; i++) {
//   console.log(`There is ${i} bottle of beer on the wall.`);
//   for (let j = 2; j <= 5; j++) {
//     console.log(`There are ${j} bottles of beer on the wall.`);
//   }
// }

let bottle = "";
for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} bottle of Beer`);
  } else {
    console.log(`There are ${i} bottles of Beer`);
  }
}

// const userData = process.argv.splice(2);
// function greeting(name) {
//     return console.log(`Hey ${name}`);
// }

// greeting(userData[0]);

// Im Terminal: node greetingApp.js name1

const userData = process.argv.splice(2);
function greeting(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Hey ${names[i]}`);
  }
}

greeting(userData);

// Im Terminal: node greetingApp.js name1 name2 name3

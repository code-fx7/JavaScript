// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000

// Op 1
((currentAge, retirementAge, monthlyWage, percentage) => {
  if (currentAge >= retirementAge) {
    return "Sorry, you need to enjoy your off days";
  } else {
    let yearsToWork = retirementAge - currentAge;
    let moneyToSafe = (monthlyWage * percentage) / 100;
    let totalSave = yearsToWork * (moneyToSafe * 12);
    console.log(
      `You are ${currentAge} and you need to work ${yearsToWork}. You are currently saving ${moneyToSafe} monthly. SO after ${yearsToWork} you will save ${totalSave}.`
    );
  }
})(40, 60, 1000, 10);

// Op2
((currentAge, retirementAge, monthlyWage, percentage) => {
  if (currentAge >= retirementAge) {
    return "You are already in holidy";
  } else {
    let monthlySavedMoney = (monthlyWage * percentage) / 100;
    let yearsToWork = retirementAge - currentAge;
    let totalSave = 12 * monthlySavedMoney * yearsToWork;
    console.log(`${totalSave}`);
  }
})(37, 67, 2000, 1);

//----------

// Write a function that checks if a user give a correct German bank account
// Example:
// DE3333 -> this is not a complete bank account please check
// QQ -> this is not a bank account
// DE33nn54637 -> this is a wrong bank account
// DE -> this is correct, I'll take your money :leichtes_lächeln:

const bankContoCheck = (str) => {
  let countrySym = str.substring(0, 2);
  let accNumbers = str.substring(2);
  let userAccLength = str.length;
  if (countrySym != "DE") {
    return "this is not a bank account";
  }
  if (userAccLength != 22) {
    return "this is not a complete bank account please check";
  }
  if (isNaN(accNumbers)) {
    return "this is a wrong bank account";
  }
  return "this is correct, I´ll take your money :)";
};

console.log("DE11223344556677889900");
console.log();
console.log();

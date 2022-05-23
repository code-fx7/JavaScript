// switch
let color = "blue";
// () [] {}
let resultText = "";
switch (color) {
  case "blue":
  case "lightBlue":
    // do something
    resultText = `This is ${color} `;
    break;
  case "green":
  case "light green":
  case "dark green":
    // do something
    resultText = `This is ${color} `;
    break;
  case "black":
    // do something
    resultText = `This is ${color} `;
    break;
  case "red":
    // do something
    resultText = `This is ${color} `;
    break;
  default:
    resultText = "Sorry this color is not in our list";
}
console.log(resultText);
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function converts(str) {
    let strToArr = str.toLowerCase().split(" ");
    console.log(strToArr);
    for (let i = 0; i < strToArr.length; i++) {
        strToArr(i) = strToArr[i][0].toUpperCase() + strToArr[1].substring(1);
    }
    strToArr = strToArr.join(" ");
    console.log(strToArr);
}

converts("the quick brown fox");

//-----
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
const vowelCounter = (str) =>{
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowelCounter.inculdes(str[i])){
            count++;
        }
    }
    return console.log(count);
}
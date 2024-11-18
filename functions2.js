/**Task 4: String Manipulation Tool
Define String Manipulation Functions:

Write functions to capitalize(text), reverse(text), and countVowels(text).
Function Expressions and Arrow Functions:

Use a function expression for reverse and an arrow function for countVowels.
Higher-Order Function for Text Processing:

Write a higher-order function called processText(text, actionFunction) that applies a given action (e.g., capitalize, reverse, or countVowels) on the input text.
 */

// Define the functions
function procesfuncion(text, actionFunction) {
  return actionFunction(text);
}
let text = `Your answer is correct.`;
//let capitalizedText = text.toUpperCase();
//console.log (capitalizedText);

function capitalize(text) {
  let capitalizedText = text.toUpperCase();
  return capitalizedText;
}

/*function reverse(text) {
    let reversedText = text.split("").reverse().join("");
    return reversedText;
}
console.log(reverse(text)); */

let reverseText = (text) => {
  let reversedText = text.split("").reverse().join("");
  return reversedText;
};

let countVowels = (text) => {
  let vowels = text.match(/[aeiou]/gi).length;
  return vowels;
};
console.log(procesfuncion(text, capitalize));
console.log(procesfuncion(text, reverseText));
console.log(procesfuncion(text, countVowels));

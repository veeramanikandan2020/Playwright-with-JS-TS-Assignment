/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

//==============================================================================================
/* Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. */

let s = "Hello World";

let stringArray = s.split(" ");

let lastWord = stringArray[stringArray.length-1];

console.log(`The last word is "${lastWord}" with length ${lastWord.length}`);
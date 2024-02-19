/* Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4. */

let str = "   fly me   to   the moon  ";

let trimStr = str.trim();

console.log(trimStr);

let splitString = trimStr.split(" ");

let lastWordStr = splitString[splitString.length-1]

console.log(`The last word is "${lastWordStr}" with length ${lastWordStr.length}`);
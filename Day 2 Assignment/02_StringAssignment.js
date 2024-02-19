/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

const { equal } = require("assert");

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

console.log(`===============================================================================================`);

// ===============================================================================================

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

console.log(`===============================================================================================`);

// =================================================================================================

/* Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.*/

let  word1 = `listen`;

let word2 = `silent`;

function isAnagram(){

    let word1_charArray = word1.split("");

    word1_charArray.sort();

    console.log(word1_charArray);

    let word2_charArray = word2.split("");

    word2_charArray.sort();

    console.log(word2_charArray);

    if(word1_charArray == word2_charArray)
    {
        console.log("Given String is Anangram");
    }
    else
    {
        console.log("Given String is not Anangram");
    }

}

isAnagram();

console.log(`====================================================================================================`);

//====================================================================================================

/* 
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false */

let str1 = "madam";

function reverseString(){

    let ch_str1 = str1.split("");

    let revStr = "";

    for(let j = ch_str1.length-1; j>=0; j--){
        
        revStr += ch_str1[j];
    }

    if(str1 === revStr)
    {
        return true;
    }
    else{
        return false;
    }
}

let palindrome = reverseString();

console.log(palindrome);

console.log(`====================================================================================================`);
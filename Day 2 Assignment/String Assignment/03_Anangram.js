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
 
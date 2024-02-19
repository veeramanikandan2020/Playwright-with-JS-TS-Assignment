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
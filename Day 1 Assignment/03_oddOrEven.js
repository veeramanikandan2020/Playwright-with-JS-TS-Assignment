/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

function checkOddOrEven(){

    if(num%2 == 0)
    {
        return "number is even";
    }
    else
    {
        return "number is odd";
    }
}

let num = 5;

let result = checkOddOrEven();

console.log(result);
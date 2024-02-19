
/*1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result */

function calculateGrade()
{
   switch(true)
   {
      case score >= 90:
         return "A+";
      
      case score <=89 && score >=70:
         return "B";

      case (score<=69 && score>=45):
         return "C";

      case (score<=44):
         return "D";
   }
}

let score = 40;

let result = calculateGrade();

console.log(`Grade of Student: ${result}`);
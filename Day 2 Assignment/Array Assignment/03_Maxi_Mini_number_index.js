/* 3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1 */

let num_Array = [34, 7, 21, 89, 54, 10, 91, 67];

let maxindex = 0;
let minindex = 0;

for(let k = 0; k< num_Array.length; k++)
{
    if(num_Array[k] > num_Array[maxindex])
    {
        maxindex = k;
    }
    else if(num_Array[k] < num_Array[minindex])
        {
            minindex = k;
        }
}

console.log(`Maximum Element: ${num_Array[maxindex]}, Index: ${maxindex}`);

console.log(`Minimum Element: ${num_Array[minindex]}, Index: ${minindex}`);
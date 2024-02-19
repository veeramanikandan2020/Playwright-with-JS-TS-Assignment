/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/
/*

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/

const { Console } = require("console");

console.log(`==========================================================================================`);

/* 1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0] */

let nums = [0,1,0,3,12];

function moveZeros(){

    let result = [];

    let zeros = 0;

    let length = nums.length;

    for(let i = 0; i<length; i++)
    {
        if(nums[i] != 0)
        {
            result.push(nums[i]);
        }
        else{
            zeros ++;
        }
    }

    for(let x = 0 ; x< zeros; x++)
    {
        result.push(0);
    }

    return result;

}

let res = moveZeros();

console.log(res);

console.log(`==================================================================================`);

/* 2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted. */

let nums1 = [1,2,2,1], nums2 = [2,2];

//let nums1 = [4,9,5], nums2 = [9,4,9,8,4]

let duplicates = [];

let index = 0;

function intersectionArray(){

    for(let i = 0; i< nums1.length; i++)
    {
        for(let j = 0; j< nums2.length; j++)
        {
        if(nums1[i] == nums2[j])
        {
            duplicates.push(nums1[index])
            index++;
            break;
        }
    }
    }
    return duplicates;
}

console.log(intersectionArray());

console.log("==================================================================================");

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

console.log("======================================================================================")

/* 4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6] */

 let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];

 function removeDuplicatesfromArray()
 {
    let resultArray = [];

    for(let m = 0 ; m < inputArray.length; m++)
    {
    if(!resultArray.includes(inputArray[m]))
    {
            resultArray.push(inputArray[m]);   
    }
    }
    return resultArray;
 }

 console.log(removeDuplicatesfromArray());
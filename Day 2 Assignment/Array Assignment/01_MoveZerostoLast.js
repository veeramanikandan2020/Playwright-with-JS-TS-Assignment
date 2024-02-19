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

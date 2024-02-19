/* 2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/

function matchingTarget()
{
    for(let i = 0; i< nums.length; i++)
    {
        for(let j = i+1; j< nums.length; j++)
        {
            let sum = 0;
            sum += nums[i] + nums[j]
            if(sum == target)
            {
                console.log(`Matching Target indices are (${i},${j})`);
            }
        }
         
    }
}

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

matchingTarget();
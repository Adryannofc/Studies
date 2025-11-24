// 1. Two Sum (Clássico de Arrays e Hash)
// Problema: Dado um array de inteiros e um target, retorne os índices dos dois números que somam o target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
const nums = [2,7,11,15];
function twoSum(array, target) {
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] === target)
                return [i, j]
        }
    }
    return []
}

console.log(twoSum(nums, 18));

function twoSumOtimizada(nums,target){
    const map = new Map();

    for(i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if(map.has(complement)){
            return[map.get(complement), i];
        }

        map.set(nums[i], i)
    }
    return [];
}

console.log(twoSumOtimizada(nums,9))
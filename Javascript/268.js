var missingNumber = function (nums) {
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i != nums[i]) {
            return i;
        }
        return nums.length;
    }
};

let nums = [0, 1];

let result = missingNumber(nums);

console.log('result', result);
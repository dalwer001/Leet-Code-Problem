var arrayPairSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let max_sum = 0;
    let i = 0;
    while (i < nums.length - 1) {
        if (nums[i] <= nums[i + 1]) {
            max_sum += nums[i];
        }
        i = i + 2;
    }
    return max_sum;
};

let nums = [1, 4, 3, 2] //[1,2,2,5,6,6]

let result = arrayPairSum(nums);

console.log('result', result);
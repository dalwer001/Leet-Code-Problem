var singleNumber = function (nums) {

    if (nums.length == 1) {
        return nums[0];
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
            return nums[i]
        }
    }
    return null;
};

let nums = [1, 0, 1];

let result = singleNumber(nums);

console.log('result', result);
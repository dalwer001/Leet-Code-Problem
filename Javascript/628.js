var maximumProduct = function (nums) {
    let i = 0;
    let max_total = 1;
    while (i < nums.length) {
        max_total *= nums[i];
        i++;
    }
    return max_total;
};

let nums = [-1, -2, -3];

let result = maximumProduct(nums);

console.log('result', result);
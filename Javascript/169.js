var majorityElement = function (nums) {
    var count = {};
    nums.forEach((i) => { count[i] = (count[i] || 0) + 1; });
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);

};

let nums = [2, 2, 1, 1, 1, 2, 2];

let result = majorityElement(nums);

console.log('result', result);
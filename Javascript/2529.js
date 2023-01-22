var maximumCount = function (nums) {
    let negativeCount = 0;
    let positiveCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negativeCount++
        }
        else if (nums[i] > 0) {
            positiveCount++
        }
        else if (nums[i] == 0) {
            zeroCount++
        }

    }

    if (negativeCount > positiveCount) {
        return negativeCount;
    } else {
        return positiveCount
    }

};

let nums = [-3, -2, -1, 0, 0, 1, 2]

let result = maximumCount(nums)

console.log('result', result);
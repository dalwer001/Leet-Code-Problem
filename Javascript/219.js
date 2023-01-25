var containsNearbyDuplicate = function (nums, k) {
    let p = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] == nums[j]) {
                if (Math.abs(i - j) <= k) {
                    return true;
                }
            }
        }
    }
    return false;
};

let nums = [1, 2, 3, 1], k = 3;

let result = containsNearbyDuplicate(nums, k);

console.log('result', result);
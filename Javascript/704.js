var search = function (nums, target) {

    let i = 0;
    while (i < nums.length) {
        if (nums[i] == target) {
            return i;
        }
        i++;
    }
    return -1;

};

let nums = [-1, 0, 3, 5, 9, 12], target = 9

let result = search(nums, target);

console.log('result', result);
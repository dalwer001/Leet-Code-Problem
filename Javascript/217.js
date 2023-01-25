var containsDuplicate = function (nums) {
    // let l = 0;
    // let r = nums.length;

    // while (l < r) {
    //     if (nums[l] != nums[r]) {
    //         return false
    //     } else {
    //         return true;
    //     }
    // }
    // l++;
    // let p = nums[0];
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] != nums[i + 1]) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    if ((new Set(nums)).size !== nums.length) {
        return true;
    } else {
        return false
    }

};

let nums = [1, 2, 3, 4, 1];

let result = containsDuplicate(nums);

console.log('result', result);
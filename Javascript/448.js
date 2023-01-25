var findDisappearedNumbers = function (nums) {

    let missing = [];
    for (var i = 1; i <= nums.length; i++) {
        if (nums.indexOf(i) == -1) {
            missing.push(i);
        }
    }
    return missing;

};

let nums = [1, 1];

let result = findDisappearedNumbers(nums);

console.log('result', result);
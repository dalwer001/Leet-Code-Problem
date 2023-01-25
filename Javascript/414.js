var thirdMax = function (nums) {

    let newArr = [...new Set(nums)].sort((a, b) => a - b);
    if (newArr.length <= 2) {
        return newArr[newArr.length - 1];
    } else {
        return newArr[newArr.length - 3]
    }

    // return newArr;

};

let nums = [1, 2];

let result = thirdMax(nums);

console.log('result', result);
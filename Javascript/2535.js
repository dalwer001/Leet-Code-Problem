var differenceOfSum = function (nums) {
    let elementSum = 0;
    let digitSum = 0;
    let digitArray = [];
    // element sum
    for (let i = 0; i < nums.length; i++) {
        elementSum += nums[i];
    }
    // if any number above 9
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > 9) {
            let spliteNumber = String(nums[j]).split('').map(Number);
            spliteNumber && spliteNumber.forEach(element =>
                digitArray.push(element)
            )
        }
        else {
            digitArray.push(nums[j]);
        }

    }

    // digits total get
    for (let k = 0; k < digitArray.length; k++) {
        digitSum += digitArray[k];
    }

    // difference find out
    function difference(a, b) {
        return Math.abs(a - b);
    }
    return difference(elementSum, digitSum)




};

let nums = [5, 3, 90, 1, 100, 2]

let result = differenceOfSum(nums)

console.log('result', result);

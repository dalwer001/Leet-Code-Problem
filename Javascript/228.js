var summaryRanges = function (nums) {
    let newArray = [];
    let x = 0;
    let y = 1;
    let count = 0;

    while (y < nums.length) {

    }

    // for (let i = 0; i < nums.length; i++) {
    //     count++
    //     ;
    //     if (count == 1) {
    //         x = i;
    //     }
    //     if (i != nums[i]) {
    //         count = 0
    //         y = nums[i];
    //         newArray.push(`"${x}->${y}"`)

    //     }
    // }
    return newArray;
};

let nums = [0, 1, 2, 4, 5, 7];

let result = summaryRanges(nums);

console.log('result', result);
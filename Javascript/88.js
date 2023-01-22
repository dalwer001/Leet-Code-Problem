var merge = function (nums1, m, nums2, n) {
    let total = m + n;
    for (var j = 0; j < nums2.length; j++) {
        nums1.push(nums2[j]);
    }

    var i = nums1.length;
    while (i--) {
        if (nums1[i] === 0 && nums1.length > total) {
            nums1.splice(i, 1);
        }
    }
    return nums1.sort((a, b) => a - b);
};

let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0], m = 6, nums2 = [1, 2, 2], n = 3

let result = merge(nums1, m, nums2, n)

console.log('result', result);

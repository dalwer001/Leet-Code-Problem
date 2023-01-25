var intersection = function (nums1, nums2) {
    let newArray = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                newArray.push(nums2[i]);
            }
        }
    }




    return newArray;
};

let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];

let result = intersection(nums1, nums2);

console.log('result', result);
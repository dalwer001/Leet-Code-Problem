var intersect = function (nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    let i = 0;
    let order_array = [];
    if (nums1.length <= nums2.length) {
        while (i < nums2.length) {
            console.log(nums1[i], nums2[i])
            if (nums1[i] == nums2[i]) {
                console.log(nums2[i])
                order_array.push(nums2[i]);
            }
            i++;
        }
    } else {
        while (i < nums1.length) {
            console.log(nums1[i])
            if (nums1[i] == nums2[i]) {
                console.log(nums1[i])
                order_array.push(nums1[i]);
            }
            i++;
        }
    }
    return order_array;

};

let nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];

let result = intersect(nums1, nums2);

console.log('result', result);
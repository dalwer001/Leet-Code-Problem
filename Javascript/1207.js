var uniqueOccurrences = function (arr) {
    let uniqueElements = [...new Set(arr)];
    const elementCounts = uniqueElements.map(value => arr.filter(arrValue => arrValue === value).length);
    elementCounts.sort((a, b) => a - b);
    let i = 0;
    while (i < elementCounts.length - 1) {
        if (elementCounts[i] == elementCounts[i + 1]) {
            return false;
        }
        i++;
    }
    return true;
};

let nums = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]

let result = uniqueOccurrences(nums)

console.log('result', result);
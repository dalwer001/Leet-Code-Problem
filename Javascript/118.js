var generate = function (numRows) {
    let newArray = [];
    for (let i = 1; i <= numRows; i++) {
        if (i == 1) {
            newArray.push([i])
        }
        else if (i == 2) {
            newArray.push([i - 1, i - 1])
        } else {
            let fakeArray = []
            for (let j = 1; j < i; j++) {
                fakeArray.push(1, i - j);

            }
            console.log(fakeArray)
        }
    }

    return newArray;
};


let numRows = 5

let result = generate(numRows)

console.log('result', result);
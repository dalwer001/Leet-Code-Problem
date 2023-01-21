var plusOne = function (digits) {
    let replacement = parseInt(digits.slice(-1));
    if (replacement < 9) {
        digits[digits.length - 1] = replacement + 1;
    }
    else {
        if (replacement == 9) {
            let j = 1;
            for (digits.length; j > 0; j--) {
                console.log(digits[j]);
            }

            digits.pop();
            let arrayNewValue = replacement + 1;
            let newArrayMake = String(arrayNewValue).split('').map(Number);
            for (let i = 0; i < newArrayMake.length; i++) {
                digits.push(newArrayMake[i]);
            }
        }
    }
    return digits;

};


let digit = [9, 9]

let result = plusOne(digit)

console.log('result', result);

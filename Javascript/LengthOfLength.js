var LengthOfLength = function (s) {
    let n = s.length;
    let j = n - 1;
    let count = 0;

    while (s[j] == ' ') {
        j--;
    }
    while (j != -1 && s[j] != ' ') {
        j--;
        count++;
    }

    return count;
}

let s = "joyboy ";

let result = LengthOfLength(s)

console.log('result', result);
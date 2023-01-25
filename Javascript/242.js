var isAnagram = function (s, t) {
    let sArray = s.split('');
    let tArray = t.split('');
    let equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    s = Array.from(sArray).sort((a, b) => a.localeCompare(b));
    t = Array.from(tArray).sort((a, b) => a.localeCompare(b))
    if (s.length != t.length) {
        return false;
    }
    return equals([s], [t])
}

let s = "anagram", t = "nagaram";

let result = isAnagram(s, t);

console.log('result', result);
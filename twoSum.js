


function twoSum(nums, target) {

    if (nums.length <= 1) return null;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] + nums[j] === target) {
                return [j,i];
            }

        }
    }
}

let array = [3, 2, 4];
let target = 6;

let result = twoSum(array, target);

console.log(result);

var rl = readline.createInterface(process.stdin, process.stdout);
var caseno = 1;
/**
* Takes care of the problem input and output.
*/
rl.on('line', function(line) {
    var input = line.split(' ');
    if (input.length == 2) {
        var res = sum(parseInt(input[0]), parseInt(input[1]));
        console.log(["Case ", caseno, ": ", res].join(""));
        ++caseno;
    }
});




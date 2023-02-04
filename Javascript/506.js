var findRelativeRanks = function (score) {
    let sortArray = [...score];
    let sortScore = sortArray.map(a => a).sort((a, b) => b - a);
    let rankArray = [];
    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < sortScore.length; j++) {
            if (score[i] == sortScore[j]) {
                if ((j + 1) == 1) {
                    rankArray.push("Gold Medal");
                }
                else if ((j + 1) == 2) {
                    rankArray.push("Silver Medal");
                }
                else if ((j + 1) == 3) {
                    rankArray.push("Bronze Medal");
                }
                else {
                    rankArray.push(`${(j + 1)}`)
                }
            }
        }
    }
    return rankArray;
};

let score = [10, 3, 8, 9, 4];

let result = findRelativeRanks(score);

console.log('result', result);
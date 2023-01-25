var maxProfit = function (prices) {
    let l = 0;
    let r = 1;
    let max_p = 0;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let p = prices[r] - prices[l];
            max_p = Math.max(max_p, p);
        } else {
            l = r;
        }
        r++;
    }

    return max_p;

};

let prices = [2, 4, 1];

let result = maxProfit(prices);

console.log('result', result);

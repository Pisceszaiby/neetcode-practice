class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
 let profit=0;
        while (r < prices.length) {
         let diff = prices[r] - prices[l];
            if (diff > profit) {
                profit = diff;
          
            }
            if (diff < 0) {
                l=r;
          
            }
                  r++;
        }

        return profit;
    }
}

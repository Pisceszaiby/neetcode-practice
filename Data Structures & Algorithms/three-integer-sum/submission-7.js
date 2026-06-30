class Solution {
    threeSum(nums) {
        let results = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {

            // ✅ skip duplicate i
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r];

                if (sum === 0) {
                    results.push([nums[i], nums[l], nums[r]]);

                    l++;
                    r--;

                    // ✅ skip duplicates for l
                    while (l < r && nums[l] === nums[l - 1]) l++;

                    // ✅ skip duplicates for r
                    while (l < r && nums[r] === nums[r + 1]) r--;

                } else if (sum > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }

        return results;
    }
}
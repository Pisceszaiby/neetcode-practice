class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        while (l < r) {
            let m = Math.floor((l + r) / 2)
            if (nums[m] > nums[r]) {
                l = m + 1
            }
            else {
                r = m
            }
        }
        let pivot = l;
        if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
            l = pivot;
            r = nums.length - 1;
        }

        else {
            l = 0;
            r = pivot - 1;
        }
        console.log(pivot, l, r);
        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            if (target == nums[m])
                return m;
            if (target > nums[m]) {
                l = m + 1;
            }
            else
                r = m - 1
        }
        return -1;
    }
}

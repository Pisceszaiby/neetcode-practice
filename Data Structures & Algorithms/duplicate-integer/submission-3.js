class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashTable = {};
 
        for (let i = 0; i < nums.length; i++) {
            if (hashTable[nums[i]] > 0){
                return true
            }
            hashTable[nums[i]] = 1;
        }
        return false
    }
}



class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // const count;
        // const result =[];
        const hashMap = {}
        for (let i = 0; i < nums.length; i++) {
            hashMap[nums[i]] = hashMap[nums[i]] ? hashMap[nums[i]] + 1 : 1
        }
        return Object.entries(hashMap)?.sort((a, b) =>
            (b[1] - a[1])
        )?.slice(0,k)?.map(a=> a[0]);
       
    }
}

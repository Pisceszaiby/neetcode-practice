class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = {}
        const buckets = []
        const result = []
        for (let i = 0; i < nums.length + 1; i++) {
            buckets.push([])
        }
        for (let i = 0; i < nums.length; i++) {
            hashMap[nums[i]] = hashMap[nums[i]] ? hashMap[nums[i]] + 1 : 1
        }
        const hashEntries = Object.entries(hashMap);

        for (let i in hashEntries) {
            buckets?.[Number(hashEntries[i][1])]?.push(Number(hashEntries[i][0]))
        }

        for (let i = buckets.length - 1; i > 0; i--) {
            if (buckets[i]?.length > 0) {
                for (let val of buckets[i]) {
                    result.push(val);
                    if (result.length === k) return result;
                }
            }
        }

    }

}
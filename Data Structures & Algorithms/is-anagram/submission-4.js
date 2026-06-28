class Solution {

    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        const hashS = {}

        for (let i in s) {
            hashS[s[i]] = hashS[s[i]] ? hashS[s[i]] + 1 : 1;
        }
        for (let j in t) {
            if (!hashS[t[j]]) return false;
            hashS[t[j]] = hashS[t[j]] - 1;
        }
        return true


    }
}

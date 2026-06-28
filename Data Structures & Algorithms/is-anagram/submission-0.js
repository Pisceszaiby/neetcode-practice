class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        const arrayS = s.split('')?.sort();
        const arrayT = t.split('')?.sort();

        for (let i in arrayS) {
            if (arrayS[i] != arrayT[i])
                return false
        }
        return true;

    }
}

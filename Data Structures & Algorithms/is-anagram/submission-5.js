class Solution {

    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        const hashS = {}

    for (let char of s) {
    hashS[char] = (hashS[char] || 0) + 1;
}

for (let char of t) {
    if (!hashS[char]) return false;
    hashS[char]--;
}
        return true


    }
}

function isAlphanumeric(c) {
     return (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9')
        );
}

class Solution {

    /**
        * @param {string} s
        * @return {boolean}
        */
    isPalindrome(s) {
        const newString = [];
        for (let i of s) {
            if (isAlphanumeric(i)) {
                newString.push(i.toLowerCase())
            }
        }
        let l = 0;
        let r = newString.length - 1;
        while (l < r) {
            if (newString[l] == newString[r]) {
                l++;
                r--;
            }
            else
                return false
        }
        return true;





    }
}
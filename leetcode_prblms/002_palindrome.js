// Given a string s, return the longest palindromic substring in s.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;

    const expand = (left, right) => {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }
        return right - left - 1; // palindrome length
    };

    for (let i = 0; i < s.length; i++) {
        let len1 = expand(i, i);       // odd length
        let len2 = expand(i, i + 1);   // even length
        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};
function longestCommonPrefix(strs) {
    if (strs.length === 0)
        return "";
    if (strs.length === 1)
        return strs[0];
    // Function to find the smallest string length in the array
    var findMinLength = function (strings) {
        return strings.reduce(function (min, str) { return Math.min(min, str.length); }, Infinity);
    };
    var prefixLength = findMinLength(strs);
    for (var i = 0; i < prefixLength; i++) {
        var char = strs[0][i];
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0].substring(0, prefixLength);
}
// Example usage:
var input1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(input1)); // Output: "fl"
var input2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(input2)); // Output: ""

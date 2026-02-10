/**
 * String Utilities
 * Functions for string manipulation and analysis
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - Input string
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  // TODO: Implement capitalize
  // Hint: Get the first character with str[0] or str.charAt(0)
  // Convert it to uppercase, then concatenate with the rest of the string
  // Don't forget to handle empty strings!
  if (str === ""){
    return str;
  }
  const charFront = str.charAt(0).toUpperCase();
  return charFront + str.slice(1);
}

/**
 * Reverses a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 */
function reverse(str) {
  // TODO: Implement reverse
  // Hint: Convert string to array with split(''), reverse it, join back
  // Or you can use a loop to build the reversed string
  let text = str.split("");
  let j = text.length - 1;
  let reversed = "";
  while (j >= 0){
    reversed += text[j];
    j--;
  }
  return reversed;
}

/**
 * Checks if a string is a palindrome (reads same forwards and backwards)
 * @param {string} str - Input string
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(str) {
  // TODO: Implement palindrome checker
  // Hint: Convert to lowercase first for case-insensitive comparison
  // Compare the string with its reversed version
  // You can use the reverse function you just wrote!
  return str.toLowerCase() === reverse(str.toLowerCase());
}

/**
 * Counts the number of words in a string
 * @param {string} str - Input string
 * @returns {number} Number of words
 */
function wordCount(str) {
  // TODO: Implement word counter
  // Hint: Trim whitespace first, then split by spaces
  // Don't forget to handle empty strings!
  // Be careful with multiple spaces between words
  if (str === ""){
    return 0;
  }
  str = str.trim();
  return str.split(/\s+/).length;
}

// Export all functions
export { capitalize, reverse, isPalindrome, wordCount };

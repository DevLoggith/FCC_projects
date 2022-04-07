// Palindrome Checker

// A palindrome is a word or sentence that's spelled the same way both forward
// and backward, ignoring punctuation, case, and spacing.

// Return true if the given string is a palindrome. Otherwise, return false.

// Note: You'll need to remove all non-alphanumeric characters (punctuation,
// spaces and symbols) and turn everything into the same case (lower or upper 
// case) in order to check for palindromes. We'll pass strings with varying 
// formats, such as racecar, RaceCar, and race CAR among others. We'll also
// pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

// TO-DO STEPS
// 1) remove all non-alphanumeric characters from original string
// 2) convert original sting to lowercase
// 3) reverse original string
// 4) compare original string to newly altered string

const REMOVE_NON_ALPHANUMERIC = (str) => str.replace(/[^a-z0-9]/ig, "");
const STRING_TO_LOWERCASE =  (str) => str.toLowerCase();
const REVERSE_STRING = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function palindrome(str) {
  const CLEAN_STRING = REMOVE_NON_ALPHANUMERIC(str);
  const LOWERCASED_STRING = STRING_TO_LOWERCASE(CLEAN_STRING);
  const STRING_REVERSED = REVERSE_STRING(LOWERCASED_STRING);
  return LOWERCASED_STRING == STRING_REVERSED;
}

palindrome("_TAC^O*CAT_");

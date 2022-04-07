// Telephone Number Validator

// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has
// the format of a valid US number. The following are examples of valid formats
// for US numbers (refer to the tests below for other variants):

//     555-555-5555
//     (555)555-5555
//     (555) 555-5555
//     555 555 5555
//     5555555555
//     1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753
// or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone
// number based on any combination of the formats provided above. The area code
// is required. If the country code is provided, you must confirm that the
// country code is 1. Return true if the string is a valid US phone number;
// otherwise return false.

// ----------------------------------------------------------------------------

// Rules for US telephone numbers:
// 1) Must be only numbers (no letter/special characters)
// 2) Has to be at least 10 numbers (no more than 11 with country code of "1")
// 3) If separated by spaces or dashes, but be in this format:
//   a) 1 *** *** ****
//   b) Only area code can have surrounding brackets

function telephoneCheck(str) {
  const regEx1 = /^(1\s?)?(\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;
  const withBrackets = /^^(1\s?)?\((\d{3})\)[-\s]?(\d{3})[-\s]?(\d{4})$/
  return regEx1.test(str) || withBrackets.test(str);
}

console.log(telephoneCheck("11278965472"));

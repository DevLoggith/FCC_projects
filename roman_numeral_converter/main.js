// Roman Numeral Converter

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

class NumeralConverter {
  constructor(inputNum) {
    this.inputNum = inputNum;
    this.numeral = "";
  }

  processNumeral(symbol, symbolValue) {
    while (this.inputNum >= symbolValue) {
      this.numeral += symbol;
      this.inputNum -= symbolValue;
    }
  }
}

function convertToRoman(num) {
  let converter = new NumeralConverter(num);
  converter.processNumeral('M', 1000);
  converter.processNumeral('CM', 900);
  converter.processNumeral('D', 500);
  converter.processNumeral('CD', 400);
  converter.processNumeral('C', 100);
  converter.processNumeral('XC', 90);
  converter.processNumeral('L', 50);
  converter.processNumeral('XL', 40);
  converter.processNumeral('X', 10);
  converter.processNumeral('IX', 9);
  converter.processNumeral('V', 5);
  converter.processNumeral('IV', 4);
  converter.processNumeral('I', 1);
  return converter.numeral;
}
 
 console.log(convertToRoman(567));

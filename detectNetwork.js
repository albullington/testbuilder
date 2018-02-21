// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  // Once you've read this, go ahead and try to implement this function, then return to the console.


var detectNetwork = function(cardNumber) {
  var firstDigit = cardNumber.substring(0, 1);
  var firstTwoDigits = cardNumber.substring(0, 2);
  var firstThreeDigits = cardNumber.substring(0, 3); 
  var firstFourDigits = cardNumber.substring(0, 4);
  var firstSixDigits = cardNumber.substring(0, 6);

    if (cardNumber.length === 14 && (firstTwoDigits === '38' || firstTwoDigits === '39')) {
      return 'Diner\'s Club';    
    } else if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && ((firstFourDigits === '4903' || firstFourDigits === '4905' || firstFourDigits === '4936' || firstFourDigits === '4911' || firstFourDigits === '6333' || firstFourDigits === '6759') || (firstSixDigits === '633110' || firstSixDigits === '564182'))) {
      return 'Switch';
    } else if (cardNumber.length === 15 && (firstTwoDigits === '34' || firstTwoDigits === '37')) {
      return 'American Express';
    } else if (cardNumber.length === 16 && (firstTwoDigits >= '51' && firstTwoDigits <= '55')) {
      return 'MasterCard';
    } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && firstDigit === '4') {
      return 'Visa';
    } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (firstTwoDigits === '65' || (firstThreeDigits >= '644' && firstThreeDigits <= '649') || firstFourDigits === '6011')) {
      return 'Discover';
    } else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (firstFourDigits === '5018' || firstFourDigits === '5020' || firstFourDigits === '5038' || firstFourDigits === '6304')) {
      return 'Maestro';
    } else if ((cardNumber.length >= 16 && cardNumber.length <= 19) && ((firstThreeDigits >= '624' && firstThreeDigits <= '626') || (firstFourDigits >= '6282' && firstFourDigits <= '6288') || (firstSixDigits >= '622126' && firstSixDigits <= '622925'))) {
      return 'China UnionPay';
    } 
  };

//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
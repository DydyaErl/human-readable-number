module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number === 0) return 'zero';
  
    let readableNumber = '';
  
    
    if (number < 10) {
      return units[number];
    }
  
    
    if (number >= 10 && number < 20) {
      return teens[number - 10];
    }
  
    if (number >= 20 && number < 100) {
      readableNumber += tens[Math.floor(number / 10)];
      if (number % 10 !== 0) {
        readableNumber += ' ' + units[number % 10];
      }
      return readableNumber;
    }
  
    
    if (number >= 100 && number < 1000) {
      readableNumber += units[Math.floor(number / 100)] + ' hundred';
      if (number % 100 !== 0) {
        readableNumber += ' ' + toReadable(number % 100); 
      }
      return readableNumber;
    }
  };
  
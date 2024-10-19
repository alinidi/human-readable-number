module.exports = function toReadable (number) {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if(number<10){ //0-9
    return ones[number];
  }
  if(number<20){ //10-19
    return teen[number - 10];
  }
  if(number<100){ //20-99
    const first = Math.floor(number/10); //tens
    const second = number % 10; //ones
    if(second === 0){
      return tens[first];
    } else{
      return `${tens[first]} ${ones[second]}`;
    }
  }
  if (number < 1000) {
        const hundredPart = Math.floor(number / 100); //сотни
        const remainder = number % 100; //changes by 100
        if (remainder === 0) {
            return `${ones[hundredPart]} hundred`;
        } else {
            return `${ones[hundredPart]} hundred ${toReadable(remainder)}`;
        }
    }

    return 'Number out of range';
}



const repeatString = function (str, number) {
  // tmpString = str
  // for (let i = 0; i < number-1; i++) str += tmpString
  if (number < 0) return "ERROR";
  return str.repeat(number);
};

// Do not edit below this line
module.exports = repeatString;

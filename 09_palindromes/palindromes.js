const palindromes = function (string) {
  string = string.toLowerCase().replace(/[\W_]/g, "");
  return string.split("").reverse().join("") == string;
};

// Do not edit below this line
module.exports = palindromes;

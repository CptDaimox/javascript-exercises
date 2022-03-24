const caesar = function (string, shift) {
  return string
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};

const mod = (n, m) => ((n % m) + m) % m;

const shiftChar = (char, shift) => {
  const uniChar = char.toUpperCase().charCodeAt(0);
  const shiftedChar =
    (uniChar >= 65 && uniChar <= 90) || (uniChar >= 97 && uniChar <= 122)
      ? String.fromCharCode(mod(uniChar + shift - 65, 26) + 65)
      : char;
  return char.charCodeAt(0) >= 97 ? shiftedChar.toLowerCase() : shiftedChar;
};

// Do not edit below this line
module.exports = caesar;

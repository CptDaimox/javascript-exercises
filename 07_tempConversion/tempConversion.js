const ftoc = function (f) {
  return Math.round((((f - 32) * 5) / 9) * 10) / 10;
};

const ctof = function (c) {
  return Math.round(((c * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line 	[°F] = [°C] × 9⁄5 + 32	[°C] = ([°F] − 32) × 5⁄9
module.exports = {
  ftoc,
  ctof,
};

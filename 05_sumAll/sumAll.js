const sumAll = function (start, end) {
  if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
  if (start > end) return sumAll(end, start);
  if (start == end) return end;
  start += sumAll(start + 1, end);
  return start;
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(n) {
  n = parseInt(n, 10)
  if (2 > n && n > -1) return n
  else if (0 > n) return "OOPS"
  return fibonacci(n-1) + fibonacci(n-2)
};

// Do not edit below this line
module.exports = fibonacci;

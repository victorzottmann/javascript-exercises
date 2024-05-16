const sumAll = function(n1, n2) {
  if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
    return "ERROR";
  }

  if (n1 < 0 || n2 < 0) {
    return "ERROR";
  }

  // swap numbers if the first is larger than the second
  if (n1 > n2) {
    let temp = n2;
    n2 = n1;
    n1 = temp;
  }
  
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

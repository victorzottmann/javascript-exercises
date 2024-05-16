const fibonacci = function(n) {
  let num = Number(n);

  if (num < 0) {
    return "OOPS";
  }  

  if (num <= 1) {
    return num;
  }

  let prev = 0;
  let current = 1;
  let next;

  for (let i = 2; i <= num; i++) {
    next = prev + current;
    prev = current;
    current = next
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;

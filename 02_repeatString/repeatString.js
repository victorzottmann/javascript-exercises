const repeatString = function(str, times) {
  if (times < 0) {
    return "ERROR";
  }
  
  return str.repeat(times);
};

// Do not edit below this line
module.exports = repeatString;

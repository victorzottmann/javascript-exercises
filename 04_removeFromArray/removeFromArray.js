const removeFromArray = function(arr, ...values) {
  const result = [];
  arr.forEach(item => {
    if (!values.includes(item)) {
      result.push(item);
    }
  });
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;

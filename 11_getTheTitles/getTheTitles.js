const getTheTitles = function(arr) {
  let result = [];
  arr.forEach(obj => {
    result.push(obj.title)
  });
  return result;
};

// Do not edit below this line
module.exports = getTheTitles;

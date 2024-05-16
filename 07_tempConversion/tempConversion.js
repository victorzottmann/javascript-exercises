const convertToCelsius = function(fahrenheit) {
  const result = (fahrenheit - 32) * 5 / 9;
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  const result = (9 / 5 * celsius) + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

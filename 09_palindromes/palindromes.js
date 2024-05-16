const palindromes = function(s) {
  const accepted = "abcdefghijklmnopqrstuvwxyz0123456789";

  const str = s.toLowerCase().split("").filter((c) => accepted.includes(c)).join("");
  const reversed = str.split("").reverse().join("");

  return str === reversed;
};

module.exports = palindromes;

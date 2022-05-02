const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numMax = [];
  for (let k = 0; k < n.toString().length; k++){
    numMax.push(+(n.toString().slice(0,k) + n.toString().slice(k+1)))
  }
  return Math.max(...numMax);
}

module.exports = {
  deleteDigit
};

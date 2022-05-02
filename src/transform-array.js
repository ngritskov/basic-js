const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
  function isCommand(el){
    if (el != '--discard-prev' && el != '--discard-next' && el != '--double-next' && el != '--double-prev') return false;
    return true;
  }
  let Copy = Array.from(arr);
  
  for (let n = 0; n < Copy.length; n++){
    if (Copy[n] == '--discard-prev' && n != 0) {
      Copy.splice(n-1, 1);
      n--;
    }
    else if (Copy[n] == '--discard-next' && n != Copy.length - 1) {
      Copy.splice(n+1, 1);
    }
    else if (Copy[n] == '--double-next' && n != Copy.length - 1) {
      Copy[n] = Copy[n+1];
    }
    else if (Copy[n] == '--double-prev' && n != 0) {
      Copy[n] = Copy[n-1];
    }
  }
  Copy = Copy.filter(el => !isCommand(el));
  return Copy;
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let N0 = +sampleActivity;
  let k = Math.LN2 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity != 'string') return false;
  if (!N0 || N0 <= 0 || N0 >= MODERN_ACTIVITY) return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / N0)  /  k);
}

module.exports = {
  dateSample
};

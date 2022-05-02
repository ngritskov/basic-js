const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let Arr = [];
const chainMaker = {
  getLength() {
    return Arr.length;
  },
  addLink(value) {
    if (value === undefined) { value = `( )` };
    Arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' ||
      !Number.isInteger(position) ||
      position <= 0 ||
      position >= Arr.length) {
      Arr.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    }
    Arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    Arr.reverse();
    return this;
  },
  finishChain() {
    let chain = Arr.join('~~');
    Arr.length = 0;
    return chain;
  }
};

module.exports = {
  chainMaker
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    let count = 0;
    while(chainMaker.find(/\(.*?\)/g)) {
      count++
    }
    return count
  },
  addLink(value) {
    let arr1 = chainMaker.split('~~');
    let arr2 = arr1.push('(' + value + ')');
    return arr2.join('~~')
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};

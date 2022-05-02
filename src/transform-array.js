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
  if (Array.isArray(arr)) {
    let result = arr.slice();

    for (j = 0; j < result.length; j++) {
      if (result[j] == 'undefined' || result[j] == 'null') {
        result.splice(j, 1)
      }
    }
    for (i = 0; i < result.length; i++) {
      if (result[i] == '--discard-next') {
        result.splice(i, 2)
      }
      if (result[i] == '--discard-prev') {
        if (i == 0) {
          result.shift()
        }
        if (i != 0) {
          result.splice(i - 1, 2)
        }
      }
      if (result[i] == '--double-next') {
        result.splice(i, 1, result[i + 1])
      }
      if (result[i] == '--double-prev') {
        if (i == 0) {
          result.shift()
        }
        if (i != 0) {
          result.splice(i, 1, result[i - 1])
        }

      }
    }

    return result
  }
  else {
    return 'Error'
  }
}

module.exports = {
  transform
};

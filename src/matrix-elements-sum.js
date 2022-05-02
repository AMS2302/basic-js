const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [];
  for (let index = 0; index < matrix.length; index++) {
    const element = matrix[index];

    let summary = element.reduce((sum, current) => sum + current, 0);
    arr.push(summary);
  }
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
}

module.exports = {
  getMatrixElementsSum
};

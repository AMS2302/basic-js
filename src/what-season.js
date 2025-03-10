const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date = 0) {

  const seasons = {
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
    'winter': [11, 0, 1],
  }

  if (date === 0) {
    return 'Unable to determine the time of year!';
  }

  const month = date.getMonth();

  for (let season in seasons) {
    if (seasons[season].includes(month)) {
      return season;
    }
  }
}

module.exports = {
  getSeason
};

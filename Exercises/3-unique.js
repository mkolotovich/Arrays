'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = array => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (arr.includes(array[i]) === false) {
      arr.push(array[i]);
    }
  }
  return arr;
};

module.exports = { unique };

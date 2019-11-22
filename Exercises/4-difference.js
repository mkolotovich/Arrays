'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const arr = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) === false) {
      arr.push(array1[i]);
    }
  }
  return arr;
};

module.exports = { difference };

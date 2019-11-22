'use strict';

const removeElements = (array, ...items) => {
  for (let j = 0; j < items.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === items[j]) {
        array.splice(i, 1);
      }
    }
  }
};

module.exports = { removeElements };

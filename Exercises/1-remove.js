'use strict';

const removeElement = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
};

module.exports = { removeElement };

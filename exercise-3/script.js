"use strict";

function myDebounce(fn, t) {
  let id;
  (function myFunc(...args) {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), t);
  })();
}

const plusOne = function (num) {
  return (num += 1);
};

console.log(myDebounce(plusOne(1), 50));
console.log(myDebounce(plusOne(2), 75));

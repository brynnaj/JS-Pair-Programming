"use strict";

function myDebounce(fn, t) {
  let id;
  return function myFunc(...args) {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), t);
  };
}

const start = Date.now();
function log(...inputs) {
  console.log([Date.now() - start, inputs]);
}

const dlog = myDebounce(log, 50);

setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);

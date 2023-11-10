"use strict";

const expect = function (val1) {
  const myObj = {
    toBe: function (val2) {
      if (val1 === val2) {
        return true;
      } else {
        return Error("Not Equal");
      }
    },
    notToBe: function (val3) {
      if (val1 !== val3) {
        return true;
      } else {
        return Error("Equal");
      }
    },
  };
  return myObj;
};

console.log(expect(5).toBe(5));
console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));

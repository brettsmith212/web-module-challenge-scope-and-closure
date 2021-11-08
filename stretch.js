// Stretch Goal 1

function createBase(base) {
  return function (num) {
    return base + num;
  };
}

var addSix = createBase(6);
console.log("16", addSix(10));
console.log("27", addSix(21));

// Stretch Goal 2
// Difference between functional and object oriented programming (Describe pros and cons)

/* 

In functional programming, the output of a function should alwasy be the same given the exact same inputs.  This eliminates any side effects taht can happen in your code.  It's advantages are efficiency, nested functions, and easy to write because each function does it's own small part.  Code does not have to be written again and again.

In OOP, you use objects to represent things you are programming.  The objects have attributes that ccan be manipulated through methods or functions.  This allows you to encapsulate data from outsiders.  It follows imperative programming while functional programming follows declarative programming.  OOP is also not as reusable as functional programming.


*/

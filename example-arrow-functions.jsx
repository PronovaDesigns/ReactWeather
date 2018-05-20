var names = ['Chris', 'Giselle', 'Alex'];

// // The function within forEach function is an anonymous function.
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// We can use arrow functions when we use anonymous functions.
// names.forEach((name) => {
//   // Multiple things can be placed in the arrow functions curly braces.
//   console.log('arrowFunc', name);
//   var x = 'something';
// });
//
// // A simplified version of the arrow function for when you want to do one thing.
// names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Chris'));

// Arrows Functions vs Anonymous Functions
  // Arrow Functions can use "this." -- anonymous functions can't
// In the example below we see an anonymous function unable to use this.name
var personAnon = {
  name: 'Baby Doll',
  // Functions can be an element of a JSON object.
  greet: function() {
    names.forEach(function (name) {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

var personArrow = {
  name: 'Baby Doll',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

personAnon.greet();
personArrow.greet();

// Challenge Area

function add (a,b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};

// The expression that is placed after the arrow gets automatically returned.
var addExpression = (a,b) => a + b;

console.log(add(1,3));
console.log(add(9,0));
console.log(addStatement(5, 8));
console.log(addExpression(3, 9));

// Why to use Arrow functions.
// Short and concise one-liner ability & cleaner code in general.
// Arrow functions can use this.variableName binding, while anonymous functions cannot.

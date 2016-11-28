// lookup the module with the name 'circle' in the same directory. (circle.js)
var circle = require('./circle');
console.log('The area of a circle of radius 4 is ' + circle.area(4));
console.log('The circumference of a circle of radius 4 is ' + circle.circumference(4));
console.log('The value of PI is' + circle.P);
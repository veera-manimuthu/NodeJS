var PI = 3.14;

exports.area = function (r) {
	return PI * r * r;
}
// Both are same 'this and exports'
this.circumference = function (r) {
	return 2 * PI * r;
}

this.P = 9;
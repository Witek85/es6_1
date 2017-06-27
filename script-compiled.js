"use strict";

// babel - transpilacja

function sumTwoNumbers() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

	return x + y;
}

console.log(sumTwoNumbers());

// polyfill, np.
// https://github.com/paulmillr/es6-shim
// można pobrać i załączyć przed skryptem

var name = "main-header";
var arr = [1, 2, 3, 4];

// metoda - sprawdza czy ciąg znaków jest w zmiennej name
console.log(name.includes('main'));
console.log(arr.includes(1));

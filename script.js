// babel - transpilacja

function sumTwoNumbers(x = 1, y = 2) {
	return x + y;
}

console.log(sumTwoNumbers());

// polyfill, np.
// https://github.com/paulmillr/es6-shim
// można pobrać i załączyć przed skryptem

let name = "main-header";
const arr = [1,2,3,4];

// metoda - sprawdza czy ciąg znaków jest w zmiennej name
console.log(name.includes('main'));
console.log(arr.includes(1));
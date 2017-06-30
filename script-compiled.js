'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

// nowe stałe i zmiennej

function showTotal() {
	var totalAmount = 4000;
	if (totalAmount > 3000) {
		var newTotalAmount = totalAmount - totalAmount * 0.1;
		console.log(newTotalAmount);
	}

	for (var _i = 0; _i <= 5; _i++) {
		document.write(_i);
	}
	console.log(totalAmount);
}

showTotal();

function showScore() {

	var score = 10;
	var x = 1;
	if (x == 1) {
		// console.log('score w function przed redeklaracją ' + score);
		var _score = 30;
		console.log('score po' + _score);
	}

	console.log(score);
}

var score2 = 25;
var score3 = 14;
var y = 1;
if (y == 1) {
	console.log('score2 bez function przed redeklaracją ' + score2);
	// console.log('score3 bez function przed redeklaracją ' + score3);
	score2 = 35;
	var _score2 = 40;
	console.log('score2 po' + score2);
	console.log('score3 po' + _score2);
}

showScore();

// stałe

// Tak jak let działa w obrębie bloku
var env = 'DEV';
{
	var _env = 'PROD';
	console.log(_env);
}
console.log(env);

// obiektu nie można zmienić ale można zmienić jego właściwości
var config = {};
config.env = 'PROD';
config.env = 'DEV';
console.log(config.env);

// Kolejność deklaracji

function showVar() {
	var x = 2;
	console.log(x);

	// console.log(y); //undefined
	var y = 3;
	// nie możemy tak zrobić, bo let i const nie ma hoistingu
}

showVar();

// jest istotna różnica tu:
// for(var i = 1; i <= 3; i++) {

var _loop = function _loop(_i2) {
	console.log('sss' + _i2);
	document.getElementById('my-element' + _i2).addEventListener('click', function () {
		alert(_i2);
	});
};

for (var _i2 = 1; _i2 <= 3; _i2++) {
	_loop(_i2);
}

// string

var giftcard = {
	'id': 'sk001',
	'name': 'Karta Podarunkowa',
	'price': 350,
	'class': 'gift',
	'description': 'Lorem ipsum dolor sit amet enim. \nEtiam ullamcorper. Suspendisse a \npellentesque dui, non felis. \nMaecenas malesuada elit lectus felis, \nmalesuada ultricies. Curabitur et ligula.'

};

function createMarkup() {
	return '\n<div class="product ' + giftcard.class + '">\n<h2>' + giftcard.id + ' - ' + giftcard.name + '</h2>\n<span>' + giftcard.price + '</span>\n<p>' + giftcard.description + '</p>\n</div>\n';
}

console.log(giftcard.description);

document.querySelector('.element1').innerHTML = createMarkup();

// destructuring tablice

var numbers1 = [1, 2, 3, "four", "five"];
var a = numbers1[0],
    b = numbers1[1],
    e = numbers1[4],
    _numbers1$ = numbers1[5],
    f = _numbers1$ === undefined ? 999 : _numbers1$;

console.log(a, b, e, f);

// destructuring funkcje

function getArray() {
	return [1, 2, 3, "four", "five"];
}

var _getArray = getArray(),
    _getArray2 = _slicedToArray(_getArray, 6),
    g = _getArray2[2],
    h = _getArray2[3],
    i = _getArray2[4],
    _getArray2$ = _getArray2[5],
    j = _getArray2$ === undefined ? 999 : _getArray2$;

console.log(g, h, i, j);

// destructuring obiekty

var person1 = {
	imie: 'Piotrek',
	wiek: 29,
	miasto: 'Sosnowiec'
};

var person2 = {
	imie: 'Stefan',
	wiek: 54
};

var imie = person1.imie,
    wiek = person1.wiek,
    miasto = person1.miasto;
var im = person2.imie,
    _person2$wiek = person2.wiek,
    wi = _person2$wiek === undefined ? 30 : _person2$wiek,
    _person2$miasto = person2.miasto,
    mi = _person2$miasto === undefined ? "Łódź" : _person2$miasto;

console.log(imie, wiek, miasto);
console.log(im, wi, mi);

// parametry funkcji

function multiplyValues() {
	var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
	var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3 * a;

	return "multiplyValues " + a + "*" + b + " " + a * b;
}

console.log(multiplyValues(4, 5));
console.log(multiplyValues(3));
console.log(multiplyValues());

// operator rest

function getValues(a) {
	for (var _len = arguments.length, Args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		Args[_key - 1] = arguments[_key];
	}

	var values = Args.sort();
	return values;
	// zrobić sort cyfrowe
}

function getValues2() {
	for (var _len2 = arguments.length, Args2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		Args2[_key2] = arguments[_key2];
	}

	var values = Args2.sort();
	return values;
	// zrobić sort cyfrowe
}

function getValuesArray(arr) {
	var values = arr.sort(function (a, b) {
		return a - b;
	});
	return values;
}

var arra = [4, 7, 4, 2, 5, 7, 8, 9, 1];
console.log(typeof arra === 'undefined' ? 'undefined' : _typeof(arra), arra.constructor, arra);
var restVal = getValues('argumenty', 'aaa', 'hhhh', 'lorem', 'ipsum', 'dolor');
var restVal2 = getValues2(4, 7, 4, 2, 5, 7, 8, 9, 1);
var restVal3 = getValuesArray(arra);

console.log(typeof restVal === 'undefined' ? 'undefined' : _typeof(restVal), restVal.constructor, restVal);
console.log(typeof restVal2 === 'undefined' ? 'undefined' : _typeof(restVal2), restVal2.constructor, restVal2);
console.log(typeof restVal3 === 'undefined' ? 'undefined' : _typeof(restVal3), restVal3.constructor, restVal3);

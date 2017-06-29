'use strict';

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

var numbers = [1, 2, 3, "four", "five"];
var a = numbers[0],
    b = numbers[1],
    e = numbers[4];

console.log(a, b, e);

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
var i = person2.imie,
    _person2$wiek = person2.wiek,
    w = _person2$wiek === undefined ? 30 : _person2$wiek,
    _person2$miasto = person2.miasto,
    m = _person2$miasto === undefined ? "Łódź" : _person2$miasto;

console.log(imie, wiek, miasto);
console.log(i, w, m);

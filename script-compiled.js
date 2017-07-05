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
}

function getValues2() {
	for (var _len2 = arguments.length, Args2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		Args2[_key2] = arguments[_key2];
	}

	var values = Args2.sort();
	return values;
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

// operator spread

function sumValues(a, b, c) {
	return a + b + c;
}

var spread_values = [1, 2, 3];
var sumApply = sumValues.apply(null, spread_values); // null to value for this
var sumCall = sumValues.call(null, spread_values);

// es6 way
var sum2 = sumValues.apply(undefined, spread_values);

console.log("sumApply ", sumApply);
console.log("sumCall ", sumCall);
console.log("sum2 ", sum2);

var arr11 = [10, 20, 30, 35];
var arr22 = [40, 50, 60, 65];

// arr11.push(arr22); // źle
arr11.push.apply(arr11, arr22); // es6 ok

console.log("arr11 ", arr11);

// destructuring parametry

// dawnej
function setOptionsOld(options) {
	var env = options.env;
	var db = options.db;
	// this.env i this.db nie zadziala - dlaczego
	return [env, db];
}

// es6
function setOptionsES6(_ref) {
	var env = _ref.env,
	    db = _ref.db,
	    _ref$def = _ref.def,
	    def = _ref$def === undefined ? 'Default' : _ref$def;

	return [env, db, def];
}

var opt = setOptionsOld({ env: 'DEV', db: 'SQL' });
var opt2 = setOptionsES6({ env: 'PROD', db: 'SQL' });

console.log('opt', opt);
console.log('opt2', opt2);

// arrow functions

var sumValuesNoArrow = function sumValuesNoArrow(a, b) {
	return a + b;
};

var sumValuesArrow = function sumValuesArrow(a, b) {
	return a + b;
};

var sumValuesArrow2 = function sumValuesArrow2(a, b) {
	return a + b;
};

console.log(sumValuesNoArrow(2, 6));
console.log(sumValuesArrow(2, 6));
console.log(sumValuesArrow2(2, 6));

// arrow functions w metodzie

var arrReduce = [1, 2, 3];

// gotowa metoda reduce
// najpierw dodajemy 2 pierwsze, potem kolejną, potem kolejną itp.
// sumujemy rosnące wartości

var sumReduce = arrReduce.reduce(function (a, b) {
	return a + b;
});

console.log(arrReduce);
console.log(sumReduce);

var sumReduce2 = arrReduce.reduce(function (a, b) {
	return a + b;
});

console.log(sumReduce2);

// arrow functions this


// this w funkcji

function Counter() {
	// tu chyba chodzi o self, albo o bindowanie this
	// var self = this;
	// albo bind this po ,}
	var self = this;
	self.count = 1;
	setTimeout(function () {
		self.count++;
		console.log(self.count);
	}, 300);
}

// w strzałce jest prawidłowy kontekst this
// nie tworzy nowego kontekstu this tylko używa takiego samego jak
// otaczający kod

function CounterES6() {
	var _this = this;

	this.count = 4;
	setTimeout(function () {
		_this.count++;
		console.log(_this.count);
	}, 500);
}

var c = new Counter();
var d = new CounterES6();

// jeszcze arrow functions

var product = {
	id: 290,
	showId: function showId() {
		return this.id;
	},
	showId2: function showId2() {
		return undefined.id;
	} // undefined
	// arrow nie nadaje się do użycia jako metody
	// m.in uwagi na kontekst this
};

console.log(product.showId());
// console.log(product.showId2()); // zwraca undefined

// iteracja

var cities = ["Warszawa", "Kraków", "Wrocław", "Poznań"];

for (var key in cities) {
	console.log(key + " " + cities[key]);
}

// es6 way

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = cities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var val = _step.value;

		console.log(val);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var city = "Warszawa";

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = city[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var letter = _step2.value;

		console.log(letter);
	}

	// obiekt map
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

var mapa = new Map();

mapa.set(1, "Warszawa");
mapa.set(2, "Kraków");
mapa.set(3, "Wrocław");
mapa.set(4, "Poznań");

console.log(mapa);

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = mapa[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var _city = _step3.value;

		console.log(_city);
	}
} catch (err) {
	_didIteratorError3 = true;
	_iteratorError3 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion3 && _iterator3.return) {
			_iterator3.return();
		}
	} finally {
		if (_didIteratorError3) {
			throw _iteratorError3;
		}
	}
}

console.log(mapa.size);

var warsaw = mapa.get(1);
console.log(warsaw);

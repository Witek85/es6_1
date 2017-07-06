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

// nowe stałe i zmiennej

function showTotal() {
	var totalAmount = 4000
	if (totalAmount > 3000) {
		let newTotalAmount = totalAmount - totalAmount  * 0.1
		console.log(newTotalAmount);
	}

	for (let i = 0; i <= 5; i++) {
		document.write(i);
	}
	console.log(totalAmount );
}

showTotal();

function showScore() {

	let score = 10;
	let x = 1;
	if (x == 1) {
// console.log('score w function przed redeklaracją ' + score);
let score = 30;
console.log('score po'+score);
}

console.log(score);

}

var score2 = 25;
let score3 = 14;
let y = 1;
if (y == 1) {
	console.log('score2 bez function przed redeklaracją ' + score2);
// console.log('score3 bez function przed redeklaracją ' + score3);
score2 = 35;
let score3 = 40;
console.log('score2 po' + score2);
console.log('score3 po' + score3);
}

showScore();

// stałe

// Tak jak let działa w obrębie bloku
const env = 'DEV'
{const env = 'PROD'
console.log(env);
}
console.log(env);

// obiektu nie można zmienić ale można zmienić jego właściwości
const config = {};
config.env = 'PROD';
config.env = 'DEV';
console.log(config.env)

// Kolejność deklaracji

function showVar() {
	var x = 2;
	console.log(x);

// console.log(y); //undefined
let y = 3
// nie możemy tak zrobić, bo let i const nie ma hoistingu
}

showVar();

// jest istotna różnica tu:
// for(var i = 1; i <= 3; i++) {
	for(let i = 1; i <= 3; i++) {
		console.log('sss'+i);
		document.getElementById('my-element' + i)
		.addEventListener('click', function() { alert(i) })
	}

// string

let giftcard = {
	'id': 'sk001',
	'name': 'Karta Podarunkowa',
	'price': 350,
	'class': 'gift',
	'description': `Lorem ipsum dolor sit amet enim. 
	Etiam ullamcorper. Suspendisse a 
	pellentesque dui, non felis. 
	Maecenas malesuada elit lectus felis, 
	malesuada ultricies. Curabitur et ligula.`

}

function createMarkup() {
	return `
	<div class="product ${giftcard.class}">
	<h2>${giftcard.id} - ${giftcard.name}</h2>
	<span>${giftcard.price}</span>
	<p>${giftcard.description}</p>
	</div>
	`
}

console.log(giftcard.description);

document.querySelector('.element1').innerHTML = createMarkup();

// destructuring tablice

let numbers1 = [1,2,3,"four","five"];
let [a,b,,,e, f = 999] = numbers1;
console.log(a,b,e,f);

// destructuring funkcje

function getArray() {
	return [1,2,3,"four","five"];
}

let [,,g,h,i, j = 999] = getArray();
console.log(g,h,i,j);

// destructuring obiekty

let person1 = {
	imie: 'Piotrek',
	wiek: 29,
	miasto: 'Sosnowiec'
}

let person2 = {
	imie: 'Stefan',
	wiek: 54
}

let {imie, wiek, miasto} = person1;
let {imie: im, wiek: wi = 30, miasto: mi = "Łódź"} = person2;
console.log(imie, wiek, miasto);
console.log(im, wi, mi);

// parametry funkcji

function multiplyValues(a = 2, b = 3 * a) {
	return "multiplyValues " + a + "*" + b + " " + a * b;
}

console.log(multiplyValues(4, 5));
console.log(multiplyValues(3));
console.log(multiplyValues());

// operator rest

function getValues(a, ...Args) {
	var values = Args.sort();
	return values;
}

function getValues2(...Args2) {
	var values = Args2.sort();
	return values;
}

function getValuesArray(arr) {
	var values = arr.sort(function(a,b){
		return a - b;
	});
	return values;
}

var arra = [4,7,4,2,5,7,8,9,1];
console.log(typeof(arra),arra.constructor, arra);
var restVal = getValues('argumenty', 'aaa','hhhh','lorem','ipsum','dolor');
var restVal2 = getValues2(4,7,4,2,5,7,8,9,1);
var restVal3 = getValuesArray(arra);

console.log(typeof(restVal),restVal.constructor,restVal);
console.log(typeof(restVal2),restVal2.constructor,restVal2);
console.log(typeof(restVal3),restVal3.constructor,restVal3);

// operator spread

function sumValues(a,b,c) {
	return a + b + c;
}

var spread_values = [1,2,3];
var sumApply = sumValues.apply(null, spread_values); // null to value for this
var sumCall = sumValues.call(null, spread_values);

// es6 way
var sum2 = sumValues(...spread_values);

console.log("sumApply ", sumApply);
console.log("sumCall ", sumCall);
console.log("sum2 ", sum2);

var arr11 = [10,20,30,35];
var arr22 = [40,50,60,65];

// arr11.push(arr22); // źle
arr11.push(...arr22); // es6 ok

console.log("arr11 ", arr11);

// destructuring parametry

// dawnej
function setOptionsOld(options) {
	const env = options.env;
	const db = options.db;
// this.env i this.db nie zadziala - dlaczego
return [env, db]
}

// es6
function setOptionsES6({env, db, def = 'Default'}) {
	return [env, db, def]
}

let opt = setOptionsOld({env: 'DEV', db: 'SQL'})
let opt2 = setOptionsES6({env: 'PROD', db: 'SQL'})

console.log('opt', opt);
console.log('opt2', opt2);

// arrow functions

var sumValuesNoArrow = function(a,b) {
	return a + b;
}

var sumValuesArrow = (a,b) => {
	return a + b;
}

var sumValuesArrow2 = (a,b) => a + b;

console.log(sumValuesNoArrow(2,6));
console.log(sumValuesArrow(2,6));
console.log(sumValuesArrow2(2,6));

// arrow functions w metodzie

let arrReduce = [1,2,3];

// gotowa metoda reduce
// najpierw dodajemy 2 pierwsze, potem kolejną, potem kolejną itp.
// sumujemy rosnące wartości

let sumReduce = arrReduce.reduce(function(a,b) {
	return a + b;
});

console.log(arrReduce);
console.log(sumReduce);

let sumReduce2 = arrReduce.reduce((a,b) => a + b);

console.log(sumReduce2);

// arrow functions this


// this w funkcji

function Counter() {
// tu chyba chodzi o self, albo o bindowanie this
// var self = this;
// albo bind this po ,}
var self = this;
self.count = 1;
setTimeout(function(){
	self.count++;
	console.log(self.count);
}, 300)
}

// w strzałce jest prawidłowy kontekst this
// nie tworzy nowego kontekstu this tylko używa takiego samego jak
// otaczający kod

function CounterES6() {
	this.count = 4;
	setTimeout(() => {
		this.count++;
		console.log(this.count);
	}, 500)
}

var c = new Counter();
var d = new CounterES6();

// jeszcze arrow functions

let product = {
	id: 290,
	showId: function() {
		return this.id;
	},
showId2: () => this.id // undefined
// arrow nie nadaje się do użycia jako metody
// m.in uwagi na kontekst this
}

console.log(product.showId());
// console.log(product.showId2()); // zwraca undefined

// iteracja

var cities = ["Warszawa", "Kraków", "Wrocław", "Poznań"];

for (let key in cities) {
	console.log(key + " " + cities[key]);
}

// es6 way

for (let val of cities) {
	console.log(val);
}

var city = "Warszawa";

for (let letter of city) {
	console.log(letter);
}

// obiekt map

var mapa = new Map();

mapa.set(1, "Warszawa");
mapa.set(2, "Kraków");
mapa.set(3, "Wrocław");
mapa.set(4, "Poznań");

console.log(mapa);

for (let city of mapa) {
	console.log(city);
}

console.log(mapa.size);

let warsaw = mapa.get(1);
console.log(warsaw);

// todo zrobić map z innymi danymi

// obiekt set

let something = new Set();

something.add(10);
something.add(20);
something.add("Hello");
something.add(true);

console.log(something);

for (let sthItem of something) {
	console.log(sthItem);
}

// nodelist

window.onload = function() {
	const pars = document.querySelectorAll("p");
	console.log(pars);
	for (const p of pars) {
		p.className = 'blue';
	}
}

	// iterator

	function createIterator(arr) {
		let nextIndex = 0;

		return {
			next: function() {
				return nextIndex < arr.length ? {value: arr[nextIndex++], done: false} : {done: true}
			}
		}
	}

	let users = createIterator(['Stefan', 'Jan', 'Andrzej'])

	console.log(users.next().value);
	console.log(users.next().value);
	console.log(users.next().value);
	console.log(users.next().done);

	// generator

	function *carGenerator() {
		yield "Audi";
		yield "Opel";
		yield "Skoda";
		yield 456;
		yield true;
	}

	let cars = carGenerator();
	console.log(cars);
	console.log(cars.next().value);
	console.log(cars.next().value);
	console.log(cars.next().value);
	console.log(cars.next().value);
	console.log(cars.next().value);
	console.log(cars.next().done);

	// weakmap

	let m = new WeakMap();

	let obj1 = {id: 1}
	let obj2 = {id: 2}

	// kluczem musi być obiekt;
	m.set(obj1,"Audi")
	m.set(obj2,"BMW")

	console.log(m.get(obj1));
	// kasujemy referencję
	obj2 = null
	console.log(m.get(obj2));

	// weakset

	let s = new WeakSet();

	let obj3 = {name: 'Andrzej'};
	let obj4 = {name: 'Mirek'};
	let obj5 = {name: 'Wojtek'};

	s.add(obj3);
	s.add(obj4);
	s.add(obj5);

	console.log(s);
	console.log(s.delete(obj4));
	console.log(s);
	console.log(s.has(obj4));
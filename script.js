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
console.log('score w function przed redeklaracją ' + score);
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
console.log('score3 bez function przed redeklaracją ' + score3);
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

console.log(y); //undefined
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
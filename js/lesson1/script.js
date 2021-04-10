console.log('hello ученик'); console.log('Js');
['учим', 'Js'].forEach(alert);
console.log('уч' + 'им');
let num = 4;
console.log(num);
'уч' + 'им';
//console.log('learn js')
console.log('js')
console.log('learn')
/**/
console.log('learn'); console.log('js');
/**/
let kaban;
let kaban123;
let $kaban;
let _kaban;
//let let;
let iKaban;
iKaban = 'перец';
console.log(iKaban);
iKaban = 'крутой';
console.log(iKaban);
/*************************/
let myAge = 34;
let myNewAge =16;
myAge = myNewAge;
[myAge].forEach(alert);
/************/
function testBlock() {
	let speed = 100;
	console.log(speed);
}
testBlock();

//console.log(speed); не выполнится

let seed = 140;
function seedTest() {
	let seed = 250;
	console.log(seed);
}
seedTest();
console.log(seed);

//КОНСТАНТЫ

//Смена значений в константе
//Объект с данными
const userProfile = {
	name: 'KABAN',
	age: '34',
	messege: 'Учись!'
}
console.log(userProfile);
//далее меняем значение одного из полей объекта
userProfile.age = 18;
console.log(userProfile);

//КЛЮЧЕВОЕ СЛОВО VAR
//Использование переменной до её объявления

//'use strict' который запрещает использовать переменную до её объявления
em = 15;
console.log(em);

var em;

//Области видимости
function testBlockLet() {
	let myAgeLet = 22;
	var myNewLet = 32;
	console.log(myAgeLet);
	console.log(myNewLet);
}
testBlockLet();

//Переменная НЕ видна за пределами бллока

console.log(myNewLet);
console.log(myAgeLet);
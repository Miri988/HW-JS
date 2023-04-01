'use strict';

document.getElementById('message').innerText = "Hello, world!";

window.alert('Hello world 2');

console.log('hello world 3');

/*Задачка 1
Создайте переменные:
    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году    
Посчитайте ваш возраст в секундах и выведите результат в консоль в формате My age in seconds = *тут ваш возраст в секундах* */

let sec = 60;
let min = 60;
let hour = 24;
let day = 365;
let myAge = 25;
let sum = sec*min*hour*day*myAge;

console.log('My age in seconds = ' + sum);

/*Задачка 2 
Имеется три переменные:
  let a = 1
  let b = 2
  let c = "белых медведей"
Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль. */

let a = 1;
let b = 2;
let c = " белых медведей";
let str = String(a) + String(b) + c;

console.log('String: ' + str);

/*Задачка 3
В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
Создайте переменную **`cipher`** и поместите туда необходимые символы */

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log('Шифр: ' + cipher);
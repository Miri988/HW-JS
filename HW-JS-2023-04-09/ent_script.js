'use strict';

/*Задача 1
Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 
> Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050) */

let n;
function getSum (n) {
  let sum = 0;
  for (let i = 0; i <= n; i ++) {
    sum +=i;
  }
  return sum;
}
console.log (getSum (100));

/*Задача 2 
Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
> Для 2021 это будет 5.*/

let num;
function getSumNumbers (num) {
  let sum = 0, n;
  while (num) {
    n = num % 10;
    num = (num - n) / 10;
    sum += n;
  }
  return sum;
}

console.log (getSumNumbers(2021));


/* Задача 3
Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
```
    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
```
*/
let a, b;
function getSumSum (a,b) {
  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i ++) {
      sum +=i;
    }
    return sum;
  } else if (a > b) {
    for (let i = b; i <= a; i ++) {
      sum +=i;
    }
    return sum;
  } else if (a = b) {
    return a;
  }
}
console.log (getSumSum(1, 0));

/*Задача 4
Написать функцию, которая принимает n-ое кол-во строк, но не меньше двух, и выводит пользователю каждую строку столько раз, в каком порядке эта строка была передана в функцию
> foo("one") // "слишком мало!"
  foo("one","two", "three") // one-twotwo-threethreethree*/

let str1 = prompt ("Введите строку", 'str1');
let str2 = prompt ("Введите строку", 'str2');

function repeatString (...str_Str) {
  if (str_Str.length < 2) return "Слшиком мало!"
  return str_Str.reduce((a, b, i) => a + b.repeat(i + 1))
}

console.log(repeatString(str1,str2));

/*Задача 5
Найдите в массиве первое четное число.
```
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
```
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.*/

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

function EvenNumber (numbers) {
  for(let i = 0; i <= numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
    return numbers[i];
    }
  }  
}

console.log(EvenNumber(numbers));

const arrow = (numbers) => numbers.find ((n) => n % 2 === 0);

console.log(arrow(numbers));

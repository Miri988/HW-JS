'use strict';

/*Задача 1
Дан массив:
```javascript
    const colors = ['red', 'green', 'blue']
```
Выведите в консоль его длину. */

(function () {
    const colors = ['red', 'green', 'blue',];
    return console.log(colors.length);
}) ();

/*Задача 2 
Дан массив:
```javascript
    const animals = ['monkey', 'dog', 'cat']
```
Выведите в консоль его последний элемент вне зависимости от его длины.*/

(function () {
    const animals = ['monkey', 'dog', 'cat',];
    return console.log(animals[animals.length-1]);
}) ();

/* Задача 3
Дан массив:
```javascript
    const students = ['Polina', 'Dasha', 'Masha']
```
+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
+ Полученный результат не забудьте вывести в консоль.
*/

(function () {
    let students = ['Polina', 'Dasha', 'Masha',];
    //students.pop();
    //students.push('Borya');
    students.splice(-1, 1, 'Borya');
    //students.shift();
    //students.unshift('Andrey');
    students.splice(0, 1, 'Andrey');
    return console.log(students);
}) ();


/*Задача 4
```javascript
    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
```
+ Соедините два массива чисел в один.
+ В полученном массиве попробуйте найти индекс числа **`8`**
*/

(function () {
    const evenNumbers = [2, 4, 6, 8, 10,];
    const oddNumbers = [1, 3, 5, 7, 9,];
    let newArr = evenNumbers.concat(oddNumbers);
    console.log(newArr.indexOf(8));
    return console.log(newArr);
}) ();

/*Задача 5 (опционально)
Реализуйте функцию которая будет проверять, является ли слово палиндромом.
*/

(function () {
    let str = prompt ("Введите строку", 'str');
    let arrStr = str.toLowerCase();
    let arrStrRev = str.toLowerCase().split('').reverse().join('');
    if (arrStr === arrStrRev) {
        alert('Слово является палиндромом');
    } else {
        alert('Слово не является палиндромом');
    }
}) ();

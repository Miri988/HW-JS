'use strict';

/*Задача 1
Напишите код, который выводит все простые числа из интервала от 2 до n.
(Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.) */

let n = 15;

for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        break;
      } else if (j === i) {
        console.log('Простое число: ' + i);
      }
    }
}

/*Задача 2 
Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
+ `юг` на юг пойдешь счастье найдешь
+ `север` на север пойдешь много денег найдешь
+ `запад` на запад пойдешь верного друга найдешь
+ `восток` на восток пойдешь разработчиком станешь*/

const side = prompt ('Введите сторону света', 'side');

switch (side) {
    case 'юг':
        alert ('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        alert ('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        alert ('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        alert ('на восток пойдешь разработчиком станешь');
        break;
    default:
        alert ('Пожалуйста, введите верные данные');
        break;
}

/* Задача 3
Написать программу, которая будет выводить в консоль лесенку.
```
    #
    ##
    ###
    ####
    #####
    ######
```
*/

let str = '#';

for (let i = 1; i <= 6; i ++) {
    console.log(str.repeat(i));
}


/*Задача 4 (опционально)
Написать программу, которая выполняет следующие операции: 
1. Запрашивает у пользователя число.
2. Последовательно задает вопрос: 
    cколько отнять / прибавить / умножить / разделить от предыдущего результата?
3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
> ((((6 - 10) + 5) * 20) / 2 = 110)*/

let num = prompt ('Введите число', 'number');
let dif = prompt ('Сколько отнять', 'number');
let sum = prompt ('Сколько прибавить', 'number');
let mul = prompt ('На сколько умножить', 'number');
let div = prompt ('На сколько разделить', 'number');

let res = (((Number(num) - Number(dif)) + Number(sum)) * Number(mul)) / Number(div);

alert('Формула: (((' + num + '-' + dif + ') + ' + sum + ') * ' + mul + ') /' + div + ' = '  + res);



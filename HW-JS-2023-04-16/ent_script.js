'use strict';

/*Задача 1
Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.  */

const user = {
   name: 'Ivan',
   surname: 'Ivanov',
};

alert(user.name);
delete user.name;
delete user.surname;
console.log(user);

/*Задача 2
Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true** */

const furniture = {
   model: 'sofa',
   color: 'blue',
};

if (furniture.model) {
   console.log("Ключ существует");
} else {
   console.log("Не найдено");
};

/* console.log(furniture.model === undefined); */

/* console.log('model' in furniture); */

/*Задача 3
Дан обьект:
```javascript
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
```
C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта. */

const student = {
   name: 'John',
   age: 19,
   isHappy: true
};

for (const key in student) {
   console.log(key);
};

for (const key in student) {
   console.log(student[key]);
};


/*Задача 4
У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.
```javascript
const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   }
}
```*/

const animals = {
   cat: {
      name: 'Енчик',
      age: 3,
   },
   dog: {
      name: 'Орео',
      age: 2,
   },
};

if (animals.bird === undefined) {
   console.log('Не существует');
} else {
   console.log(animals.bird.name);
};

if (animals.hasOwnProperty('bird')) {
   console.log(animals.bird.name);
} else {
   console.log('Не существует');
}


if ('bird' in animals) {
   console.log(animals.bird.name);
} else {
   console.log('Не существует');
};

if(animals?.bird?.name) {
   console.log(animals.bird.name)
} else {
   console.log('Не существует')
};
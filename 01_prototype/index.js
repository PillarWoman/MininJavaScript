const person = {
    name: 'Max',
    age:25,
    greet: function () {
        console.log('Greet!')
    }
}

const personNew = new Object({
    name: 'Max',
    age:25,
    greet: function () {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello!')
}
const lena = Object.create(personNew)

lena.name = 'Elena'

const srt = new String('I am string')
// str.sayHello()
//HEllo!

//Строка - это тоже объект, но у него над классом Object есть еще класс string
// Прототип -- это обхект, с помощью котрогот мы расширяем свойства
// Обхектов или классов.  И с помощью него мы можем получать некое наследование в JS

//https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
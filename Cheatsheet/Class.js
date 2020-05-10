//prototype-deprication
function F() {
    this.v = 42
}

F.prototype = {
    m: function () {
    }
}

function B() {
}

B.prototype = new F()
B.prototype.f = 'Hello World'
var test = new B()
console.log(test.v)
/*
* в ES5 для прототипа был метод геттер:
* Object.getPrototypeOf(obj)
* в ES-2015 так же добавился сеттер:
* Object.setPrototypeOf(obj, newProto)
* ...  а так же узаконено свойство __proto__ которое дает прямой доступ к прототипу
* */

//super
let animal = {
    walk() {
        console.log("run")
    }
}
let rabbit = {
    __proto__: animal,
    walk() {
        super.walk()
    }
}
rabbit.walk()

let walk = rabbit.walk
walk()

//Class
class User {
    constructor(name) {
        this.name = name
    }

    say() {
        console.log('Hi! ', this.name)
    }
}

let u = new User('Jon')
u.say()
new User('jjjjjj').say()

//
class User2 {
    constructor(first, last) {
        this.first = first
        this.last = last
    }

    get fullName() {
        return `fullname: ${this.first}--${this.last}`
    }

    set fullName(value) {
        [this.first, this.last] = value.split(' ')
    }
}

let u3 = new User2('Jon', 'Don')
console.log(u3)
console.log(u3.fullName)
u3.fullName = 'ffff gggg'
console.log(u3.fullName)

//
class User3 {
    constructor(first, last) {
        this.first = first
        this.last = last
    }

    static genUser() {
        return new User3('ddd', 'kkk')
    }
}

let u4 = User3.genUser()
console.log(u4)

//
class Animal {
    constructor(name) {
        this.name = name
    }

    walk() {
        console.log('run')
    }
}

class Mouse extends Animal {
    walk() {
        super.walk()
        console.log(' and pisk')
    }
}

let m = new Mouse('Jerry')
m.walk()
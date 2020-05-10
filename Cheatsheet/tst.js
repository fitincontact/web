/*function Man(name, surname) {
    this.name = name
    this.surname = surname
    this.fullName = function () {
        return this.surname + " " + this.name
    }
}

let man = new Man('Jon', 'Don');*/
//man.fullName()
//console.log(man.fullName())

let man = {
    name: 'Jon',
    surname: 'Don',
    fullName() {
        return `${this.surname} ${this.name}`
    }
}
console.log(man.fullName())

class Room {
    constructor(windows, owner) {
        this.windows = windows > 0 ? windows : 1
        this.owner = owner
    }

    set setOwner(owner) {
        this.owner = owner
    }
}

room = new Room(0, 'Jon')
console.log(room)
room.setOwner = 'hjhjhjh'
console.log(room)
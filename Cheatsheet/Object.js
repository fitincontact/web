//empty
let q = new Object();
let q2 = {}

//anonim
let methodName = "ff"
let tttt = 9999
let w = {
    a: "fdfd",
    b: 123456,
    getAll() {
        return "All1:" + this.a + "---" + this.b
    },
    get All() {
        return "All2:" + this.a + "---" + this.b
    },
    [methodName]() {
        return "QQQQ"
    },
    tttt
}
console.log(w)
console.log(w.b)
console.log(w.getAll())
console.log(w.All)
console.log(JSON.stringify(w))
console.log(w.ff())
console.log(w["ff"]())
console.log(w[methodName]())
console.log("w[\"b\"]:", w["b"])
w.All3 = function () {
    return "All3:" + this.a + "---" + this.b
}
console.log(w.All3())
w.c = 1111
delete w.a
for (key in w) {
    console.log("key:" + key)
}
if ("tttt" in w) console.log("tttt:" + w.tttt)
w['All4'] = "All4:" + w.c + "---" + w.b
w['All5'] = `All5: ${w.c} --- ${w.b}`
console.log(w['All4'])
console.log(w['All5'])

//
function W(a, b) {
    this.a = a
    this.b = b
    this.getAll = function () {
        return "All:" + this.a + "---" + this.b
    }
}

let w2 = new W("adsadaa", 22)
console.log(w2)
console.log(w2.getAll())
//
let petr = {name: "petr"}
let ivan = {name: "ivan"}
let getName = function () {
    return "name is " + (this.name ? this.name : "undefained")
}
petr.getName = getName
ivan.getName = getName
console.log(petr.getName())
console.log(ivan.getName())
console.log(getName())
//
let user = {name: "Jenya"}
let visitor = {isAdmin: false, visits: true}
let admin = {isAdmin: true}
Object.assign(user, visitor, admin)
console.log(user)

let clone = Object.assign({}, user)
user.name = "jgjgjjjgjjg"
console.log(user)
console.log(clone)
//
false.toString()
[1, 2].toString()
//2.toString()  //SyntaxError: Invalid or unexpected token
2..toString()
//2 .toString()
//(2).toString()
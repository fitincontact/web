function p(...param) {
    console.log(param)
}

//import * as h from './hello';

//Array
var x = []
var x2 = [1, 2, 3]
var x21 = new Array(11, 22, 33)
x21.forEach(function (t) {
    console.log(t)
})

var x3 = [
    1.2,
    "dfdfd",
    false,
    function (...t) {
        p(t)
    }]

p(x3)

for (let i = 0; i < x3.length; i++) {
    p(x3[i])
}

x3[3]("jkjjkjk")

//p(42000-(42000/100)*10)
//p((42000/100)*10)

var v = []
v[2] = 10
v[4] = "dfdfd"
v[6] = false

//in
for (key in v) {
    p(key, v[key])
}
//of
for (key of v) {
    p(key, v[key])
}

text = "Hello"
for (let char of text) {
    p(char)
}

console.log(v)
console.log(v.valueOf())
console.log(v.toString())

var n = [1, 2, 3, 4]
p(n.join("---"))

//stack
var m = ["a", "b", "c"]
m.pop()
p(m)

m.push("d")
p(m)

//
m.shift()
p(m)
m.unshift("A")
p(m)

//
var q = [1, 2, 3, 4]
q.splice(2, 2, "A", "B")
p(q)
p(q.splice(0, 2))
//
w1 = [1, 2]
w2 = [3, 4]
p(w1.concat(w2))
//
e = [10, 5, 20]
p(e.sort())
p(e.reverse())
p(e.sort(
    function (a, b) {
        return a - b
    }
))
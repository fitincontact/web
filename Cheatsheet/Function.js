//normal
function q() {
    console.log("!!!")
}

q()
console.log("name:", q.name)
//anonim
let q2 = function () {
    console.log("!!!")
}
q2()

//
function w(title = "jnjnjnjn", i = 10) {
    console.log(`${title}--${i}`)
}

w()
w(1)
w("!", "ee")

//
function e(q, w, ...e) {
    console.log(`${q}--${w}--${e}`)
}

e(1, w = 2, 3, 4, 5, 6)
//
let obj = {
    num: 1,
    txt: "fdfdfdf"
}

function r(
    {
        num = 0, txt = "!"
    }
) {
    console.log(`${num}--${txt}`)
}

r(obj)
//
let i1 = x => console.log(++x)
let i2 = function (x) {
    console.log(++x)
}
i1(10)
i2(10)

let getTime = () => console.log(
    new Date().getHours(),":",new Date().getMinutes()
)

getTime()





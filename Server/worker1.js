var a = require('debug')('worker:a')
    , b = require('debug')('worker:b')

function workA() {
    a('doing lots of uninteresting work')
    setTimeout(workA, Math.random() * 2000)
}

workA()

function workB() {
    b('doing some work')
    setTimeout(workB, Math.random() * 3000)
}

workB()
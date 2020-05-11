var winston = require('winston')

function workA() {
    winston.log(
        'debug',
        'doing lots of uninteresting work'
    )
    setTimeout(workA, Math.random() * 2000)
}

workA()

function workB() {
    winston.debug('doing some work')
    setTimeout(workB, Math.random() * 3000)
}

workB()
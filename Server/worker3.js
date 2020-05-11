const winston = require('winston');

const logger = winston.createLogger(
    {
                levels: {
                    debug: 0,
                    info: 1,
                    warn: 2,
                    error: 3
                },
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'error.log' })
        ]
    }
);

logger.info('it works!!');

function workA() {
    logger.log(
        'debug',
        'doing lots of uninteresting work'
    )
    setTimeout(workA, Math.random() * 2000)
}

workA()

function workB() {
    logger.debug('doing some work')
    setTimeout(workB, Math.random() * 3000)
}

workB()
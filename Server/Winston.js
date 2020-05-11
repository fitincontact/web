/*
https://www.npmjs.com/package/winston
 */
var winston = require('winston')
    , http = require('http')
    , name = 'My App'

winston.error('booting o%', name)

http.createServer(
    function (req, res) {
        winston.info(req.method + '---' + req.url)
        res.end('hello winston\n')
    }
).listen(
    3000,
    function () {
winston.info('listening')
    }
)

//require('./worker2')
require('./worker3')
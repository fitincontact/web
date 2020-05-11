/*
https://www.npmjs.com/package/debug
npm i debug
 */
var debug = require('debug')('http')
    , http = require('http')
    , name = 'My App'

debug('booting %o', name)

http.createServer(
    function (req, res) {
        debug(req.method + '--debug--' + req.url)
        res.end('hello debug\n')
    }
).listen(
    3000,
    function () {
        debug('listening')
    }
)

require('./worker1')
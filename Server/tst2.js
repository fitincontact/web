const http = require("http")
let server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World')
    }).listen(3000)

// ...

module.exports.server = server
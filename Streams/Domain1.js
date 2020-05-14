let http = require('http')
let errorCounter = 0
let server = new http.Server()

port = 3000
ip = '127.0.0.1'

server.listen(
    port,
    ip,
    () => {
        console.log(`Server running on http://${ip}/${port}`)
    }
)

server.on(
    'request',
    (req, res) => {
        if (++errorCounter === 4) {
            wrongFunctionName()
        }
        console.log('request', errorCounter)
        res.end(`response ${errorCounter}`)
    }
)
/*
https://nodejs.org/en/docs/guides/domain-postmortem/
https://nodejs.org/docs/latest-v8.x/api/domain.html/
 */
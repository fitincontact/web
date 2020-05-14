const http = require('http')

const server =
    http.createServer(
        (req, res) => {
            res.statusCode = 200
            res.setHeader(
                'Content-Type',
                'text/plain'
            )
            res.end('Hello world my first Server2\n')
        }
    )

port = 3000
ip = '127.0.0.1'

server.listen(
    port,
    ip,
    () => {
        console.log(`Server running at http://${ip}:${port}`)
    }
)

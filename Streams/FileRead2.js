//асинхронное чтение
let http = require('http'),
    fs = require('fs')

http.createServer(
    (req, res) => {

        if (req.url === '/') {
            fs.readFile(
                'index.html',
                (err, data) => {
                    if (err) {
                        console.log(err)
                        res.statusCode = 500
                        res.end('Error reading file')
                        return
                    }
                    res.end(data)
                    console.log('answered')
                }
            )
        }
        console.log('end of method')
    }
).listen(3000)

console.log('started')
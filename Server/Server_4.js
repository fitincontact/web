let http = require('http')

let url = require('url')

new http.Server(
    (req, res) => {
        console.log(req.method, req.url)
        let parsedUrl = url.parse(req.url, true)
        if (parsedUrl.pathname == '/echo' &&
            parsedUrl.query.msg
        ) {
            res.end(parsedUrl.query.msg)
        } else {
            res.statusCode = 404
            res.end('Help I cant find it!!!')
        }
    }
).listen(3000, '127.0.0.1')
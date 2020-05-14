//чтение в поток по частям

let http = require('http')
let fs = require('fs')

new http.Server(
    (req, res) => {
        if (req.url === '/') {
            sendFile(new fs.ReadStream(__filename), res)
        }
    }
).listen(3000)

function sendFile(file, res) {
    file.on('readable', write)

    function write() {
        let data = file.read()
        if (data && !res.write(data)) {

            file.removeListener('readable', write)

            res.once('drain',
                () => {
                    file.on('readable', write)
                    write()
                })
        }
    }

    file.on('end',
        () => {
            res.end()
        }
    )
}

//wget --limit-rate 0.5k http://localhost:3000

//file.pipe(res)
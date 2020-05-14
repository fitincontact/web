//передача данных медленному клиенту

let http = require('http')
let fs = require('fs')
let name = __filename

new http.Server(
    (req, res) => {
        if (req.url === '/') {
            sendFile(new fs.ReadStream(name), res)
            console.log('send')
        }
    }
).listen(3000)

function sendFile(file, res) {
    file.pipe(res)

    file.on('error',(err)=>{
        res.statusCode = 500
        console.log(err)
        res.end('Error')
    })

    file.on('open',()=>{console.log('Open')})
    file.on('close',()=>{console.log('Close')})

    //закрытие соединения до окончания передачи файла
    res.on('close',()=>{file.destroy()})
}

//wget --limit-rate 0.1k http://localhost:3000
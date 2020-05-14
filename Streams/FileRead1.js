//синхронное чтение
let http = require('http'),
    fs = require('fs')

http.createServer(
    (req, res) => {
        let answer
        res.end(answer)
        if (req.url === "/") {
            answer = fs.readFileSync('index.html')//TODO try catch
        } else {
            answer = 'Data not found!!!'
        }


        console.log('answer: ' + answer)
    }
).listen(3000)

console.log('started')
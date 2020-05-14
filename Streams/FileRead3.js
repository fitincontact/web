//чтение бинарных данных
let fs = require('fs')

fs.readFile(
    __filename,
    (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            console.log(data.toString('utf-8'))
        }
    }
)
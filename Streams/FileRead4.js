//работа с потоком

let fs = require('fs')

let stream = new fs.ReadStream(__filename)

stream.on(
    'open',
    () => {
        console.log('open')
    }
)

stream.on(
    'readable',
    () => {
        let data = stream.read()
        if (data) {
            console.log(data)
        } else {
            console.log('empty')
        }
    }
)

stream.on(
    'end',
    () => {
        console.log('end')
    }
)

stream.on(
    'close',
    () => {
        console.log('close')
    }
)

//буфер 64k
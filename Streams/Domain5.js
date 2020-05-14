let domain = require('domain')
let d = domain.create(),
    server

d.on(
    'error',
    (err) => {
        console.log(`Domain catch error ${err}`)
    }
)

d.run(() => {
    server = new http.Server()
})

server.on(
    'request',
    () => {
        setTimeout(() => {
            wrongFunctionName()
        }, 200)
    }
)

server.emit('request')


let domain = require('domain')
let d = domain.create(),
    server

d.on(
    'error',
    (err) => {
        console.log(`Domain catch error ${err}`)
    }
)

server = new http.Server()

d.run(() => {
    server.on(
        'request',
        () => {
            setTimeout(() => {
                wrongFunctionName()
            }, 200)
        }
    )

    server.emit('request')
})
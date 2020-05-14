let domain = require('domain')
let server = domain.create()

server.on(
    'error',
    (err) => {
        console.log(`Domain catch error ${err}`)
    }
)

server.run(
    () => {
        setTimeout(() => {
            wrongFunctionName()
        }, 200)
    }
)
let http = require('http')

let server =  new http.Server()

server.listen(
    3000,
    '127.0.0.1',
    ()=>{
        console.log('Server running')
    }
)

server.on(
    'request',
    (req,res)=>{
        res.end('hellloooo\n')
    }
)
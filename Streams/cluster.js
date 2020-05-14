const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

list = []

if (cluster.isMaster) {
    console.log(`Master ID=${process.pid} is running`)
    //fork workers
    for (let i = 0; i < numCPUs; i++) {
        list.push(cluster.fork())
    }
    console.log(`list = ${list.length}`)
    cluster.on(
        'exit',
        (worker, code, signal) => {
            console.log(`worker ID = ${worker.process.pid} died`)
        }
    )
} else {
    //workers can use together one TCP-connection
    http.createServer(
        (req, res) => {
            res.writeHead(200)
            rs = `Answered ${process.pid}`
            res.end(rs)
            //console.log(rs)
        }).listen(3000)
    console.log(`Worker ID = ${process.pid} started`)
}

if (list[0]) {
    list[0].disconnect()
}

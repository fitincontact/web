const EventEmitter = require("events").EventEmitter
let manager = new EventEmitter()
let data = {data: "data"}
let mydata = {}
manager.on("request",
    (req) => {
let y=1
        mydata = data
        manager.response = data
        req.myProperty = true
    })

manager.emit("request", mydata);


module.exports.manager = manager


let manager = new EventEmitter()
let data = {data: "data"}
mydata={}
manager.on("request",
    (req) => {
        req=data
        mydata = data
        manager.response = mydata

    })
manager.emit("request", mydata);


let EventEmitter = require("events").EventEmitter

let manager = new  EventEmitter()

manager.on(
    "request",
    (request)=>{
        request.myProperty = true
    }
)

manager.on(
    "request",
    (request)=>{
        console.log(request)
    }
)

manager.emit("request",{data:"DATA"})
manager.emit("request",{data:"NEW DATA"})
manager.emit("dfdfdfd",{data:"NEW DATA"})//don't work
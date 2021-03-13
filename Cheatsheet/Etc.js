console.log(`// proxy:`)
let user = {}
let user2 = {}
let proxy = new Proxy(
    user,
    //user2,
    {
        get (target,prop){
            console.log(`read ${prop}`)
            return target[prop]
        },
        set (target,prop, value){
            console.log(`write ${prop} ${value}`)
            target[prop] = value
            return value
        }
    }
)

proxy.firstName = 'test'
let asasa = proxy.firstName
console.log(`// asasa:`,asasa)

console.log(user.firstName)
//console.log(user2.firstName)

console.log(`// false.toString():`)
false.toString()
    [1, 2].toString()
//2.toString()  //SyntaxError: Invalid or unexpected token
2..toString()
//console.log(2..toString())
//2 .toString()
//(2).toString()
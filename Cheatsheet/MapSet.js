let map = new Map()
map.set(1, '11')
map.set('fdfdfd', 34)
map.set(false, 't')
console.log(map)
console.log(map.get(1))
console.log(map.get(false))
//WeakMap

//
let set = new Set()
set.add(1)
set.add(1)
set.add(1)
set.add(2)
set.add(2)
set.add(3)
console.log(set)
let f = {name: 'jjjjjjjj'}
set.add(f)
set.forEach(i => console.log(i.name))
//WeakSet

//
function* genSeq() {
    yield 'a'
    yield 'b'
    return 'c'

}

let g = genSeq()
let val
while (!(val = g.next()).done) {
    console.log(val)
}
console.log(g.next())

//
function* genSeq2(res) {
    console.log(res)
    res = yield 'aa'
    console.log(res)
    res = yield 'bb'
    console.log(res)
    return 'cc'
}

let val2, i = 0
let g2 = genSeq2(i)
while (!(val2 = g2.next(i++)).done) {
    console.log(val2)
}
console.log(val2)

//proxy
let user = {}
let proxy = new Proxy(
    user,
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
proxy.firstName
console.log(user.firstName)




console.log(`// map:`)
let map = new Map()
map.set(1, '11')
map.set('fdfdfd', 34)
map.set(false, 't')
console.log(map)
console.log(map.get(1))
console.log(map.get(false))
//WeakMap

console.log(`// set:`)
let set = new Set()
set.add(1)
set.add(1)
set.add(1)
set.add(2)
set.add(2)
set.add(3)
set.add(`asas`)
console.log(set)
let f = {dddd: 'jjjjjjjj'}
set.add(f)
set.forEach(i => {console.log(`i=`,i);console.log(`i.dddd=`,i.dddd)})
//WeakSet




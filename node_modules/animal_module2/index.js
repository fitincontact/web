let lang = require("./ru.json")
let animal = {
    walk() {
        console.log(lang.run)
    }
}
console.log('Animal_module', lang.loaded)
//console.log(module)
module.exports = animal

/*
npm init
npm publish
npm login
npm publish
npm i module_name
cd node_modules
*/
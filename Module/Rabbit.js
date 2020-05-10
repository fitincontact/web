let imported = require("./Animal")
let rabbit = {
    __proto__: imported.animal
}
rabbit.walk()
console.log('1')

let getPerson = function () {
    if (true) {
        let person = {name: "Albert"}
        return person
    } else {
        return undefined
    }
}

// k = getPerson()
// console.log(k)

console.log('2')

let promise = new Promise((resolve, reject) => {
        setTimeout(getPerson, 2000)
        //console.log(`person: ${person}`, person)
        if (person === undefined) {
            reject(new Error(`timeout ${person}`, person))
        } else {
            resolve(`correct ${person}`, person)
        }

    }
)

console.log('3')

promise.then(
    result => console.log('succsess1 ' + result),
    error => console.log('error1 ' + error.message)
)

console.log('4')
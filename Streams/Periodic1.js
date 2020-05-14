setTimeout(
    () =>
        console.log('4. timeout'),
    1000
)

setImmediate(
    () =>
        console.log('2. immediate')
)

setInterval(
    () =>
        console.log('3. interval'),
    700
)

console.log('1. first row')
let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve('correct')
                reject(new Error('timeOut'))
            },
            500
        )
    }
)
promise.then(
    result => console.log('succsess ' + result),
    error => console.log('error ' + error.message)
)
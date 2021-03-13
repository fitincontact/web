/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
Объект Promise (промис) используется для отложенных и асинхронных вычислений.
синтаксис:
let promise = new Promise(
    function (resolve, reject) {
        при вызове promise выполняется данная функция
        по завершении нужно вызвать одно из
        resolve(результат) - при успешном выполнении
        reject(ошибка) - при ошибке
    }
)
вызов Promise:
    promise.then(onFullFilled, onRejected)
onFullFilled - функция которая будет вызвана с результатом при resolve
onRejected - функция которая будет вызвана с ошибкой при reject
*/
let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                if (true) {
                    resolve('correct')
                } else {
                    reject(new Error('timeOut'))
                }
            },
            5000
        )
    }
)
promise.then(
    result => console.log('succsess ' + result),
    error => console.log('error ' + error.message)
)
//
let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
                //resolve('correct')
                reject(new Error('timeOut'))
            },
            500
        )
    }
)
promise2
    .then(
        result => console.log('succsess1 ' + result),
        error => console.log('error1 ' + error.message)
    )
    .then(
        result => console.log('succsess2 ' + result),
        error => console.log('error2 ' + error.message)
    )
/*
если catch:
обработчик catch(onRejected) получает ошибку и должен обработать ее:
два варианта:
1. если ошибка не критичная то onRejected возвращает значение через return и управление переходит в следующий .then(onFullFilled)
2. если ошибка критичная и продолжать с ней нельзя то он делает throw и управление переходит в следующий catch(onRejected)
*/

//
function promise3(resolve, reject) {
    setTimeout(() => {
            console.log('done')
            resolve('correct')
            //reject(new Error('timeOut'))
        },
        500
    )
}

Promise.all([
    new Promise(promise3),
    new Promise(promise3),
    new Promise(promise3),
    new Promise(promise3)
]).then(
    result => {
        console.log(result)
    }
)
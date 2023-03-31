import { after } from "node:test"

const asyn = () => {
    return new Promise((resolve,reject) => {
        (true) ? setTimeout(() => resolve('Async!!'),200) : reject(new Error('Error!'))
    })
}

const funcion = async() => {
    const something = await asyn()
    console.log(something)
    console.log('hello')
}

console.log('Before')

funcion()

console.log('after')
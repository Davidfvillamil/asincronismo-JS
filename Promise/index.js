//sintaxis de las promesas
const promise = new Promise(function (resolve,reject){
    resolve('todo ha sico correcto')
})

const cow = 12

const count_cow = new Promise(function (resolve, reject){
    if (cow > 10){
        resolve(`We have ${cow} on the farm, therefore we can`)
    }else{
        reject(`we have ${cow}, therefor we can't produce the milk`)
    }
})

count_cow.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
}).finally(()=>{
    console.log("Finally")
})
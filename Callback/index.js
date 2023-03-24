// Ejemplo 1 
function suma (x,y){
    return x+y
}

function call(num1,num2,callback){
    return callback(num1,num2)
}

console.log(call(1,1,suma))

//-------------------------------Ejecutar una función en un tiempo definido -------------------------

// con función anonima: 
setTimeout(function (){
    console.log('Setso anal')
}, 2000)

//Con una función no anonima

function gretting (name){
    console.log(`hola ${name}`)
}

setTimeout(gretting,5000,'Oscar')
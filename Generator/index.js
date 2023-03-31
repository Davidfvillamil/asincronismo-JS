function* gen (){
    yield 1
    yield 2
    yield 3 
}

const g = gen()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

function* iterable(arr){
    for (let v of arr){
        yield v
    }
}

const it = iterable(['David','Omar','Lucia','SEXO ANAL'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

function filterPar(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0
}

const meuArray = [2, 5, 6, 8 , 9, 10]

console.log(filterPar(meuArray))
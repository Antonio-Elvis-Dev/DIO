const maca = {
    value: 2
}

const laranja = {
    value:4
}

function mapThis(arr, thisArg){
    return arr.map(function(item){
      return  item * this.value
    }, thisArg)
}

const nuns = [1, 2]

console.log('this -> maçã', mapThis(nuns, maca))
console.log('this -> laranja', mapThis(nuns, laranja))


// ------------------------ MAP SEM THIS ------------------------------------

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    })
}

const num = [2, 4, 8, 9, 10, 20]

console.log(mapSemThis(num))
console.log(nuns, num)
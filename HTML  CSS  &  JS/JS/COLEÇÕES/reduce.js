// function somaMum(arr) {
//     return arr.reduce(function (prev, current) {
//         console.log({
//             prev
//         })
//         console.log({
//             current
//         })
//         return prev + current
//     })
// }

// const arr = [1, 2]

// console.log(somaMum(arr))



// ----------------------------------------------------------

const lista = [
    {
    name: 'sabao em po',
    preco: 5
    },

    {
        name: 'cafe',
        preco:10
    },

    {
        name: 'suco de goiaba',
        preco: 10
    },

    {
        name: 'oleo',
        preco: 10
    }

]


const saldoT = 100

function calculaSaldo(saldoT, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    },saldoT)
}


console.log(calculaSaldo(saldoT, lista))
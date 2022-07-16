// const alunos=[
// {
//     nome: "joão",
//     nota: 6,
//     turma: "3B",
// },
// {
//     nome: "pedro",
//     nota: 8,
//     turma: "2A",
// },
// {
//     nome: "Rosy",
//     nota: 10,
//     turma: "9B",
// },
// {
//     nome: "Rany",
//     nota: 2,
//     turma: "7B",
// },
// ];

// function selecao(arr, media){

// let aprovado = []
   
// for(let i = 0; i < arr.length; i++){

//     const {nota, nome} = arr[i]

//         if(nota >= media){
//             aprovado.push(nome)

//         }
//     }
//     return aprovado
// }

// console.log(selecao(alunos,6))


function calcularIdade(anos){

    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`
}

const pessoa1 = {
    nome: "Juca",
    idade: 21
}

const pessoa2 = {
    nome: "Maria",
    idade: 50
}

const animal = {
    nome: "Sarninha",
    idade: 10,
    raca: "viralata"
}

console.log(calcularIdade.apply(pessoa1,[30]))
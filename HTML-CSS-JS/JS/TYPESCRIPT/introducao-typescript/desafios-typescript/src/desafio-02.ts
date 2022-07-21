let pessoa = { nome: String, idade: Number };

type Pessoa = {
    nome: String,
    idade: Number,
    trabalho: Profissao
}
enum Profissao {
    Atriz,
    Padeiro,
    Professor

}

const pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    trabalho: Profissao.Atriz
}

const pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    trabalho: Profissao.Padeiro
}
let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    trabalho: Profissao.Professor
};

let pessoa4 : Pessoa = {
    nome: "carlos",
    idade: 19,
    trabalho: Profissao.Padeiro
}
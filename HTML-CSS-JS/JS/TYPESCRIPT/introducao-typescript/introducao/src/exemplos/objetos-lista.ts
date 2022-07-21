const pessoa = {
  nome: 'Maria',
  idade: 26,
  profissao: 'DEV',
};

pessoa.idade = 25;

enum Profissao{
    Streamer,
    Dev,
    Jornalista,
    Professor,
}


const jao ={
    nome: 'jão',
    idade: 23,
    profissao: Profissao.Jornalista
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: string
}

interface Estudante extends Pessoa{
    materias: string[]

}

const Rosy ={
    nome: 'Rosiany',
    idade:21,
    profissao:Profissao.Dev,
    materias: ['Desenvolvimento Web', 'Introdução a lógica de POG', 'matematica discreta']
}

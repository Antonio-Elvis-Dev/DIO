"use strict";
const pessoa = {
    nome: 'Maria',
    idade: 26,
    profissao: 'DEV',
};
pessoa.idade = 25;
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Streamer"] = 0] = "Streamer";
    Profissao[Profissao["Dev"] = 1] = "Dev";
    Profissao[Profissao["Jornalista"] = 2] = "Jornalista";
    Profissao[Profissao["Professor"] = 3] = "Professor";
})(Profissao || (Profissao = {}));
const jao = {
    nome: 'jão',
    idade: 23,
    profissao: Profissao.Jornalista
};
const Rosy = {
    nome: 'Rosiany',
    idade: 21,
    profissao: Profissao.Dev,
    materias: ['Desenvolvimento Web', 'Introdução a lógica de POG', 'matematica discreta']
};

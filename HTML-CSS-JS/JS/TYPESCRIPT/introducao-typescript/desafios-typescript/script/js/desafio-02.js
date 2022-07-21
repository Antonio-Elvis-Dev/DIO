"use strict";
let pessoa = { nome: String, idade: Number };
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["Professor"] = 2] = "Professor";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: "maria",
    idade: 29,
    trabalho: Profissao.Atriz
};
const pessoa2 = {
    nome: "roberto",
    idade: 19,
    trabalho: Profissao.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    trabalho: Profissao.Professor
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    trabalho: Profissao.Padeiro
};

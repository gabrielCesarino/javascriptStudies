//Escopo de bloco

if(true){
    var mes = 'Dezembro'
    console.log(mes)
}

console.log(`Fora do escopo ${mes}`)

//Const e let respeitam o escopo de bloco

/*if(true){
    const mes2 = 'Dezembro'
    console.log(mes2)
}

console.log(`Fora do escopo ${mes2}`)//Error not defined
*/

//Declarando com const

const semana = 'Sexta'
//semana = 'Quinta' // Erro na execução
//const semana = 'Quinta' //Erro no hoisting

const data = {
    dia: 29,
    mes: 'Janeiro',
    ano: 2020
}

//Podemos alterar propriedade de um objeto constante
data.dia = 21
data.mes = 'Julho'

//Exercicios

//Por qual motivo o código abaixo retorna com erros?

/*{
    var cor = 'preto'
    const marca = 'Fiat'
    let portas = 4
}

console.log(cor, marca, portas)
*/

//Resposta: as variáveis marca e portas foram criadas como const e let respectivamente, portanto pertencem somente ao escopo de bloco dentro das {}

//Como corrigir o erro abaixo?

/*
function somarDois(x){
    const dois = 2
    return x + dois
}

function dividirDois(x){
    return x + dois
}
*/

const dois = 2

function somarDois(x){
    return x + dois
}

function dividirDois(x){
    return x/2
}


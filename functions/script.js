//Functions

function areaQuadrado(lado) {
    return lado*lado
}

console.log(areaQuadrado(2))

//Utilizando resultado da função

function pi (){
    return 3.14
}

let total = 5 + pi()

console.log(total)

//Parâmetros e argumentos

function imc(peso, altura){
    let imc = peso / (altura*altura)
    return imc
}

console.log(imc(80, 1.7))

//Executando function sem argumentos.

function corFavorita(cor){
    if(cor === 'azul'){
        return 'azul'
    }else if(cor === 'verde')
        return 'verde'
    else 
        return 'nada'
}

console.log(corFavorita())

//Argumentos podem ser funções

addEventListener('click', function() {
    console.log('Clicou')
})

//Podem não retornar valor

function imc2(peso, altura){
    let imc = peso / (altura*altura)
}

imc2(90, 10) //Retorna undefined


//Valores retornados podem ser quaisquer

function terceiraIdade (idade){
    if(typeof idade !== 'number')
        return 'Preencha um número'
    return (idade>=60)
}

console.log(terceiraIdade(60))

//Escopo - variaveis criadas em um bloco de código não são visiveis fora dela. Funções só conseguem acessar variáveis disponiveis no contexto pai.

function paisesVisitar (paisesVisitados){
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados}`
}

//console.log(totalPaises) - Não é possível acessar pois ela não existe no escopo atual (global), somente dentro da function paisesVisitar().

console.log(paisesVisitar(20))

//Exemplo contexto pai

var profissao = 'Dev'

function dados(){
    var nome = 'Gabriel'
    var idade = '19'
    function outrosDados(){
        var endereco = 'São Paulo'
        return `${nome}, ${idade}, ${endereco}, ${profissao}`//Consegue acessar normalmente o contexto pai.
    }
    return outrosDados()
}

console.log(dados())

//Hoisting - as funções são antes enviadas a memória, o que permite chamar uma função antes mesmo de ter declarado ela.

console.log(perimetroQuadrado(2))

function perimetroQuadrado(lado){
    return lado * 4
}
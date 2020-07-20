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
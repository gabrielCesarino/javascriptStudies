//Crie uma função para verificar se um valor é Truthy

var trueValue = true
var falseValue = false

function checkTruthy(booleanValue){
    return !!booleanValue
}

console.log(checkTruthy(trueValue))
console.log(checkTruthy(falseValue))

//Crie uma função matemática que retorne o perímetro de um quadrado

var lado = 4

function perimetroQuadrado(lado){
    return lado*4
}

console.log(perimetroQuadrado(lado))

//Crie uma função que retorne o seu nome completo
//com parâmetros nome e sobrenome

var nome = 'Gabriel'
var sobrenome = 'Cesarino'

function nomeCompleto (nome, sobrenome){
    return nome + ' ' + sobrenome
}

console.log(`Nome: ${nomeCompleto(nome, sobrenome)}`)

//Crie uma função que verifique se um número é par

var num = 2

function checkPar(num){
    if(num%2 == 0)
        return true
    else
        return false
}

if(checkPar(num))
    console.log(`${num} é par!`)
else
    console.log(`${num} é impar!`)

//Crie uma função que retorne o tipo de dado
//passado como argumento

var string = 'string'
var number = 2

function returnType (text){
    return typeof text
}

console.log(returnType(string))
console.log(returnType(number))

//Utilize o addEventListener para mostrar seu nome completo
//toda vez que o scroll for utilizado

addEventListener('scroll', function(){
    console.log(nomeCompleto(nome, sobrenome))
})

//Corrija o erro abaixo

/*function precisoVisitar (paisesVisitados){
    var totalPaises = 193
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}

function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

precisoVisitar(20)
jaVisitei(20)*/

var totalPaises = 193

function precisoVisitar (paisesVisitados){
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
}

function jaVisitei(paisesVisitados){
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
}

console.log(precisoVisitar(20))
console.log(jaVisitei(20))

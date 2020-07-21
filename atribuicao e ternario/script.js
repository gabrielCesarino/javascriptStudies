var x = 5
var y = 4

console.log(x)

x += y

console.log(`x+=y -> ${x}`)


//Operador ternário

var idade = 19

var maiorIdade = (idade>=18)?'Maior de idade':'Menor de idade'//cond?true:false

console.log(maiorIdade)

//Exercicio

//Some 500 ao valor de scroll abaixo

var scroll = 1000

scroll+=500

//Atribua true para a variável darCredito,
//caso o cliente possua carro e casa
//false caso o contrário

var possuiCarro = true
var possuiCasa = true

var darCredito = (possuiCarro && possuiCasa)

console.log(darCredito)

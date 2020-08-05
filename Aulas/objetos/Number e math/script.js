console.log(Number.isInteger(2.3))//False
console.log(parseFloat('Oi2'))//NaN


//toLocaleString

const preco = 59.99;

console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

//Math

console.log(Math.PI) //Retorna valor de PI
console.log(Math.abs(5))
console.log(Math.ceil)

console.log(Math.round((Math.random() * 100)))
console.log(Math.floor(Math.random() * (50 - 49 + 1) + 49))

//Exercicios 

//Retorne um número aleatório entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050))

//Retorne o maior numero da lista abaixo
const numeros = '4, 5, 20, 8, 9'
const arrayNumeros = numeros.split(', ')
const numMax = Math.max(...arrayNumeros);

//Crie uma função para limpar os preços

const listaPrecos = ['R$ 59.99', 'R$ 100.22']

function limparPreco (preco){
    preco = +preco.toUpperCase().replace('R$', '').trim();

    preco = +preco.toFixed(2);
    return preco;
}

//Retorne a soma total


let soma = 0;
listaPrecos.forEach((item) => {
    soma += limparPreco(item);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

const comida = 'Pizza'
const agua = new String ('Agua')

console.log(agua[0])
console.log(agua.charAt(0))

const frase = "A melhor linguagem é "
const linguagem = "JavaScript"

const fraseFinal = frase.concat(linguagem)

const fruta = 'Banana'
const listaFrutas = 'Melancia, Banana, Laranja'

listaFrutas.includes(fruta) //True
fruta.includes(listaFrutas) //false

//Slice

const transacao01 = 'Deposito de cliente'
const transacao02 = 'Deposito de fornedor'

console.log(transacao01.slice(0, 2))

//IndexOf e lastIndexOf

const instrumento = 'Guitarra'

console.log(instrumento.indexOf('r'))//5
console.log(instrumento.lastIndexOf('r'))//6

//padStart e padEnd

const preco = 'R$ 99,00'

console.log(preco.padEnd(10, '.'))

//Repeat

const r = 'ta'

console.log(r.repeat(5))

//Replace

let listItems = 'Camisas Bonés Calças'
console.log(listItems)

listItems = listItems.replace(/[ ]+/g, ', ')
console.log(listItems)

//Split

const arrayItems = listItems.split(', ')
console.log(arrayItems)

//Trim 

const nome = ' Gabriel'
console.log(nome.trim())

//Exercicios

//Utilizando o forEac na array abaixo, 
//some os valores de Taxa e os valores de recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39'
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 49'
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129'
    }
]

let taxaTotal = 0
let recebimentoTotal = 0

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '')
    if(item.descricao.slice(0, 4) === 'Taxa')
        taxaTotal += numeroLimpo
    else
        recebimentoTotal += numeroLimpo
    
})

console.log(taxaTotal)
console.log(recebimentoTotal)

//Retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'
console.log(transportes.split(';'))


//Substitua todos os spans por a's

let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
               </ul>`

html = html.split('span').join('a')

console.log(html)

//Retorne o ultimo caracter

const frase1 = 'Melhor do ano!'

console.log(frase1[frase1.length - 1])

//Retorne o total de taxas

const transacoes03 = ['Taxa do Banco', ' TAXA DO PÃO  ', '   taxa do mercado', 'deposito bancario', '  TARIFA especial']

let totalDeTaxas = 0

transacoes03.forEach((item) => {
    if(item.toLowerCase().trim().includes('taxa'))
        totalDeTaxas++
})

console.log(totalDeTaxas)
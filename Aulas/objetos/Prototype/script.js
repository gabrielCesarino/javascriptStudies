// function Pessoa (nome, idade){
//     this.nome = nome
//     this.idade = idade
// }


// const andre = new Pessoa('Andre', 28)

// console.log(Pessoa.prototype)
// console.log(andre.prototype)

// Pessoa.prototype.andar  = function(){
//     return 'Pessoa andou'
// }

const pais = 'Brasil'
const cidade = new String ('Rio')

const listAnimais = ['Cachorro', 'Gato', 'Cavalo']

const listaArray = document.querySelectorAll('li')

console.log(Array.prototype.slice.call(listaArray))
console.log(Array.from(listaArray))


const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true
    }
}

//Exercicios

//Crie uma função construtora de Pessoas
//Deve conter nome, sobrenome e idade
//Crie um método no prototipo que retorne
//o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.nomeCompleto = function () {
        return `${this.nome} ${this.sobrenome}`
    }

const p1 = new Pessoa ('João', 'Henrique', '18')

//Liste os métodos acessados por 
//dados criados com NodeList
//HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))
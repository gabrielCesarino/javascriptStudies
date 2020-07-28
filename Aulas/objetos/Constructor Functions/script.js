// //Construction function

// function Carro(marca, precoInicial){
//     const taxa = 1.2
//     const precoFinal = precoInicial * taxa
//     this.marca = marca
//     this.preco = precoFinal
// }

// const honda = new Carro('Honda', 4000)
// const fiat = new Carro('Fiat', 2000)

// //Exemplo real

// const Dom = {
//     seletor: 'li',
//     element(){
//         return document.querySelector(this.seletor)
//     },
//     ativar(){
//         this.element().classList.add('ativo')
//     }
// }

// Dom.seletor = 'ul'
// Dom.ativar()

// function Dom (seletor){
//     this.element = function() {
//         return document.querySelector(seletor)
//     }
//     this.ativar = function() {
//         this.element().classList.add('ativo')
//     }
// }

// const li = new Dom('li')
// const ul = new Dom('ul')
// const lastLi = new Dom('li:last-child')

// Transfome o objeto abaixo em uma constructor function

// const pessoa = {
//     nome: 'Nome',
//     idade: 0,
//     andar(){
//         console.log(this.nome + 'andou')
//     }
// }

function Pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
    this.andar = function () {
        console.log(this.nome + ' andou')
    }
}

//Crie 3 pessoas:
//João - 20 anos
//Maria - 25 anos
//Bruno - 15 anos

const p1 = new Pessoa('João', 20)
const p2 = new Pessoa('Maria', 25)
const p3 = new Pessoa ('Bruno', 15)

//Crie uma Constructor Function (DOM) para manipulação de listas de elemenos do Dom. Deve conter as seguintes propriedades e métodos:

//elements, retorna Nodelist com os elementos selecionados
//addClass(classe), adiciona a classe a todos os elementos
//removeClass(classe), remove a classe de todos os elementos

function Dom (element){
    const elementList = document.querySelectorAll(element)
    this.elements = elementList
    this.addClasse = function (classe) {
        this.elements.forEach((item) => {
            item.classList.add(classe)
        })
    }
    this.removeClasse = function (classe) {
        this.elements.forEach((item) => {
            item.classList.remove(classe)
        })
    }
}

const li = new Dom('li')


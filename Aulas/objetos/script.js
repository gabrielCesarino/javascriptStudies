var pessoa={
    nome: 'Gabriel',
    idade: 19,
    profissao: 'Dev'
}

console.log(pessoa.idade)

//Métodos

var quadrado={
    lados: 4,
    area () {
        var lados = this.lados//This sempre faz referência ao próprio objeto.
        return lados*lados
    },
    perimetro(lado){
        return lado*4
    },
    cinco(){
        return 5
    }
}

console.log(quadrado.area())
console.log(quadrado.perimetro(4))

//Objetos nativos

var pi = Math.PI

console.log(pi)
console.error(pi)
console.table(pessoa)//Retorna objeto e suas propriedades em uma tabela

//Setando uma nova propriedade ao objeto

var cozinheiro = {
    nome: 'João',
    idade: 45
}

cozinheiro.especialidade = 'Massas'//Seta uma nova propriedade caso ela não exista.

//Exercício

//Crie um objeto com os seus dados pessoais
//Deve possuir pelo menos duas propriedades: nome e sobrenome

var dadosPessoais = {
    nome: 'Gabriel',
    sobrenome: 'Cesarino',
    idade: 19,
    nomeCompleto(){
        return (`${this.nome} ${this.sobrenome}`)
    }
}

//Modifique o valor da propriedade preço para 3000

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000


//Crie um objeto de um cachorro que represente um labrador preto com 10 anos
//que late ao ver um homem

var cachorro = {
    raça: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa){
        if(pessoa === 'homem')
            return 'AU'
        else
            return ' '
    }
}

//Tudo é objeto

var nome = 'Gabriel' //nome virá um objeto de classe String que tem métodos padrões.

var altura = 1.8

altura.toString()//Tranforma 1.8 em "1.8"

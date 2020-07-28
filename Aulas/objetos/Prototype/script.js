function Pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
}


const andre = new Pessoa('Andre', 28)

console.log(Pessoa.prototype)
console.log(andre.prototype)

Pessoa.prototype.andar  = function(){
    return 'Pessoa andou'
}
//Construction function

function Carro(marca, precoInicial){
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = precoFinal
}

const honda = new Carro('Honda', 4000)
const fiat = new Carro('Fiat', 2000)


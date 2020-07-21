
//Declaração de arrays
var videoGames = ['Switch', 'PS4', 'Xbox']

console.log(videoGames[0])//Acessando index 0 do array

//For Loop

for(var numero = 0; numero<videoGames.length; numero++){
    console.log(videoGames[numero])
}

//While Loop

var i = 0
while (i<10){
    console.log(i)
    i++
}

//Utilizando break

for(var i = 0; i<videoGames.length;i++){
    console.log(videoGames[i])
    if(videoGames[i] === 'PS4')
        break
}

//forEach

videoGames.forEach(function(i, index){//function(item-array, index) -> referência para cada valor do array
    console.log(i, index)
})

//Exercicios
//Crie uma array com os anos que o Brasil ganhou a copa
//1959, 1962, 1978, 1994, 2002

var copasBrasil = [1959, 1962, 1978, 1994, 2002]

//Interaja com o array utilizando um loop para mostrar
//no console a seguinte mensagem: 'o Brasil ganhou a copa de ${ano}

copasBrasil.forEach(function(item){
    console.log(`O Brasil ganhou a copa de ${item}`)
})

//Intera com um loop nas frutas abaixo e pare ao chegar em Pera

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i<frutas.length;i++){
    console.log(frutas[i])
    if(frutas[i] === 'Pera')
        break
}

//Coloque a última fruta do array em uma variável
//sem remover
var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)
const href = location.href//window é global por tanto não precisa ser chamado para acessar os métodos que possui.

const h1Text = document.querySelector('h1')//document faz referência ao HTML

console.log(h1Text.innerHTML)

//addEventListener

document.querySelector('button').addEventListener('click', function(){
    console.log('botão')
})

//Exercicios

//Retorne o url da página atual utilizando o objeto window

console.log(location.href)

//Seleciona o primeiro elemento da página que
//possua a classe ativo

document.querySelector('.ativo')

//Retorne a linguagem do navegador
console.log(window.navigator.language)

//Retorne o tamanho da janela
console.log(window.innerWidth)
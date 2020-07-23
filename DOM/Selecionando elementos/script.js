//Selecionando elementos por ID

//const animais = document.getElementById('animais')

//console.log(animais)

//Selecionando por Classe e Tag

const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection)

//Query Selector

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno)

//Query Selector All

const todasLi = document.querySelectorAll('li')
console.log(todasLi)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

//HTMLCollection

const gridHTMLCollection = document.getElementsByClassName('grid-section')
console.log(gridHTMLCollection)

//NodeList

const gridSectionNode = document.querySelectorAll('.grid-section')

gridSectionNode.forEach(function(item, index){
    console.log(item)
});

//Array-like to Array

const arrayGrid = Array.from(gridSectionNode)


//Exercicios

//Retorne no console todas as imagens do site

const allImg = document.querySelectorAll('img')
console.log(allImg)

//Retorne no console apenas as imagens que começaram com a palavra imagem

console.log(document.querySelectorAll('[src^="img/imagem"]'))

//Selecione todos os links internos

const allLinksInternos = document.querySelectorAll('[href^="#"]')

allLinksInternos.forEach(function(item){
    console.log(item.innerHTML)
})

//Selecione o primeiro h2 dentro de .animais-descricao

const animaisDescription = document.querySelector('.animais-description')

const primeiroH2 = animaisDescription.querySelector('h2')

console.log(primeiroH2)


//Selecione o último p do site

const allP = document.querySelectorAll('p')

const ultimoP = allP[allP.length - 1]

console.log(ultimoP)

//classes e atributos

//ClassList

const menu = document.querySelector('.menu')

menu.classList.add('active')
menu.classList.add('azul')
menu.classList.remove('azul')

if(menu.classList.contains('active'))
    menu.classList.add('ativado')

menu.className += ' azul'

console.log(menu)

//Atributos

const animais = document.querySelector('.animais')

console.log(animais.attributes)

console.log(animais.getAttribute('id'))

animais.setAttribute('src', 'animais')

console.log(animais.getAttribute('src'))


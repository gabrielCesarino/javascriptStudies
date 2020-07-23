//Selecionando elementos por ID

const animais = document.getElementById('animais')

console.log(animais)

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
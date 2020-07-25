const h1 = document.querySelector('h1')

console.log(h1.outerHTML)
console.log(h1.innerText)

const ul = document.querySelector('ul')
console.log(ul.innerHTML)
console.log(h1.outerHTML)

//Transversing

const li = document.querySelector('li')
console.log(li.parentElement)

console.log(h1.nextElementSibling)

console.log(ul.children)

//Seletor CSS last child (Exemplo)

console.log(ul.querySelector('li:last-child'))

//Nodes

console.log(h1.nextSibling)

//Maniupulando elementos

ul.appendChild(h1)//Adiciona ao último filho 
console.log(ul)

const primeiroLink = document.querySelector('li')

ul.insertBefore(h1, primeiroLink)

console.log(ul)

//Criando elementos

const novoH2 = document.createElement('h2')
novoH2.innerText = 'Novo titulo'

ul.appendChild(novoH2)

const novoH1 = h1.cloneNode(true)

console.log(novoH1)


//Exercicio

//Duplique o menu e adicione ele em copy

const novoUl = ul.cloneNode(true)

ul.appendChild(novoUl)

//Selecione o segundo link da lista

const segundoLink = primeiroLink.nextElementSibling
console.log(segundoLink)

//Substitua o primeiro titulo pelo segundo

h1.innerHTML = novoH2.innerHTML
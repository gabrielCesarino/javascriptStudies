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
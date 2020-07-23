//const imgs = document.querySelectorAll('img')

//imgs.forEach(function(item, index, array){
//  console.log(item, index)
//})

//Array-like to array -> para utilizar os métodos.

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(item){
    console.log(item.innerHTML)
})

//Arrow Function 

const imgs = document.querySelectorAll('img')

imgs.forEach((item) => console.log(item)
)


//Exercicios 

//Mostre no console cada parágrafo do site

const allP = document.querySelectorAll('p')

allP.forEach((item) => console.log(item))

//Mostre o texto dos parágrafos no console

allP.forEach((item) => console.log(item.innerHTML))




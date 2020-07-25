const link = document.querySelector('a')

function callback(e){
    console.log('Link clicado')
    console.log(e)
}

link.addEventListener('click', callback)


// const segundoLink = document.querySelector('.contact')

// function callback2(e){
//     console.log(e.currentTarget)
// }

// segundoLink.addEventListener('click', callback2)

//PreventDefault()


const segundoLink = document.querySelector('.contact')

function callback2(e){
    e.preventDefault()
    console.log(e.currentTarget)
}

segundoLink.addEventListener('click', callback2)

const h1 = document.querySelector('h1')

// function handleEvent(e){
//     console.log(event.type, event)
// }

// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)

// window.addEventListener('scroll', handleEvent)
// window.addEventListener('keydown', handleEvent)

//Keyboard

// function handleKeyboard(e){
//     if(e.key === 'a')
//         console.log('TECLA A')
// }

// window.addEventListener('keydown', handleKeyboard)

//forEach

const allLinks = document.querySelectorAll('a')

allLinks.forEach((item) => {
    item.addEventListener('click', callback)
})

//Quando o usuário clicar nos links do site, adicione a classe ativa e remova dos outros se eles possuirem.

function addActive(){
    allLinks.forEach((item)=>{
        item.classList.toggle('active')
    })
}

allLinks.forEach((item)=>{
    item.addEventListener('click', addActive)
})

//Selecione todos os elementos do site começando do body, ao clicar mostre exatamente quais elementos estão sendo clicados.

// function handleEventAll(e) {
//     console.log(e.target)
// }

// document.addEventListener('click', handleEventAll)

//Usando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, método remove() remove um elemento

// function handleEventAll(e) {
//     (e.target.remove())
// }

// document.addEventListener('click', handleEventAll)


//Se o usuário clicar na tecla T aumente todo o texto do site

function handleKeyboard(e){
    if(e.key === 't'){
        h1.setAttribute('style', 'font-size: 90px')
        console.log('t')
    }
}

window.addEventListener('keydown', handleKeyboard)

console.log(h1)


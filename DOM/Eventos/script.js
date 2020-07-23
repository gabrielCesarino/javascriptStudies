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

function handleKeyboard(e){
    if(e.key === 'a')
        console.log('TECLA A')
}

window.addEventListener('keydown', handleKeyboard)
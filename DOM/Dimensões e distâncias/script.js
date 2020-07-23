//Dimensões e distâncias

const listaAnimais = document.querySelector('.animais-list')

const height = listaAnimais.scrollHeight
const animaisTop = listaAnimais.offsetTop

console.log(height, animaisTop)

const h2 = document.querySelector('h2')
const h2Left = h2.offsetLeft

console.log(h2Left)

//getBoundingClientRect

const section = document.querySelector('section')
const rect = section.getBoundingClientRect()

console.log(rect.width)
console.log(rect.height)
console.log(rect.top)

if(rect.top < 0){
    console.log('Passou')
}

console.log(
    window.innerHeight, 
    window.innerWidth,
    window.pageYOffset
)

//matchMedia

const small = window.matchMedia('(max-width: 600px)')


console.log(small.matches)
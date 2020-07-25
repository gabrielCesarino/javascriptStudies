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

//exercises

//Verifique a distância da primeira imagem em relação ao topo da página

const firstImg = document.querySelector('img')

console.log(firstImg.offsetTop)

//Retorne a soma da largura de todas as imagens

function somaImagens(){
    const allImages = document.querySelectorAll('img')
    let widhtTotal = 0
    allImages.forEach((item) => {
        widhtTotal += item.offsetWidth
    })

    console.log(widhtTotal)
}


window.onload = somaImagens()

//Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48/48px)

const allLink = document.querySelectorAll('a')
allLink.forEach((item)=>{
    if(item.offsetHeight >= 48 && item.offsetWidth >= 48)
        console.log('Link ideal')
    else
        console.log('Link fora de padrão')
})


//Se o browser for menor que 720px adicione a classe menu-mobile ao menu

const mobile = window.matchMedia('(max-width: 720px)')
const menu = document.querySelector('.menu')

if(mobile.matches)
    menu.classList.add('menu-mobile')

console.log(menu)
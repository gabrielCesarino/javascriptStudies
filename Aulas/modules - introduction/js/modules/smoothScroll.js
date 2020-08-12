export default function initSmoothScroll(){

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"')

    function scrollToSection(e) {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        const topo = section.offsetTop

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        //Forma alternativa
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })

}


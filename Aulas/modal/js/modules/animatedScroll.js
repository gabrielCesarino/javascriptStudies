export default function initAnimatedScroll(){

    const sections = document.querySelectorAll('.js-scroll')
    if (sections.length) {
        const windowsPorcentagem = window.innerHeight * 0.75
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowsPorcentagem
                if (sectionTop < 0)
                    section.classList.add('active')
            })
        }
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}

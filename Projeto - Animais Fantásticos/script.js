function initTabNav() {

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active')

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('active')
        })

        tabContent[index].classList.add('active')
    }

    tabMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeTab(index)
        })
    })
}
}

initTabNav()

function initAccordion(){
const accordionList = document.querySelectorAll('.js-accordion dt')
accordionList[0].classList.add('ativo')
accordionList[0].nextElementSibling.classList.add('active')

function activeAccordion(){
    this.nextElementSibling.classList.toggle('active')
    this.classList.toggle('active')
}


accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})
}

initAccordion()
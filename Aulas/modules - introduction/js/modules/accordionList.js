import * as test from './testNoDefault.js'

console.log(test.test1());
console.log(test.testConst);

export default function initAccordion(){
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

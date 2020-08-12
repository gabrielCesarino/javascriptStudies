
// const result = document.querySelector('#result');

// function calc(type, value) {
//     if(type === 'action'){
//         if(value === 'c'){
//             result.value = ' ';
//         }else if (value === '='){
//             const valorCamp = result.value;
//             result.value = eval(valorCamp);
//         }else {
//             result.value += value;
//         }
//     }else if(type === 'value'){
//         result.value += value;
//     };
// };
const result = document.querySelector('#result');

const allButtons = document.querySelectorAll('button');

console.log(allButtons);

allButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
        if(e.target.textContent !== 'C' && e.target.textContent !== '=')
        result.value += e.target.innerText;
    })
})
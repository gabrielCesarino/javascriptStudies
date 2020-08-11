
const result = document.querySelector('#result');

function calc(type, value) {
    
    if(type === 'action'){
        if(value === 'c'){
            result.value = ' ';
        }else if (value === '='){
            const valorCamp = result.value;
            result.value = eval(valorCamp);
        }else {
            result.value += value;
        }
    }else if(type === 'value'){
        result.value += value;
    };
};
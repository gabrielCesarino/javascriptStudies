function quadradoArea (lado){
    return lado*lado;
}

const areaQuadrado = new Function ('lado', 'return lado * lado');

console.log(areaQuadrado(4))

function descricaoCarro () {
    console.log(this.marca + ' ' + this.ano);
};

descricaoCarro.call({marca: 'Honda', ano: 2014});

const carros = ['Ford', 'Fiat', 'VW'];

const frutas = ['Banana', 'Uva'];

carros.forEach.call(frutas, (item)=>{
    console.log(item)
});


function Dom (seletor) {
    this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function (classe){
    this.element.classList.add(classe);
}

const ul = new Dom ('ul')

const li = {
    element: document.querySelector('li')
};

Dom.prototype.ativo.call('li', 'ativar');


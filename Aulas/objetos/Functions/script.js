// function quadradoArea (lado){
//     return lado*lado;
// }

// const areaQuadrado = new Function ('lado', 'return lado * lado');

// console.log(areaQuadrado(4))

// function descricaoCarro () {
//     console.log(this.marca + ' ' + this.ano);
// };

// descricaoCarro.call({marca: 'Honda', ano: 2014});

// const carros = ['Ford', 'Fiat', 'VW'];

// const frutas = ['Banana', 'Uva'];

// carros.forEach.call(frutas, (item)=>{
//     console.log(item)
// });


// function Dom (seletor) {
//     this.element = document.querySelector(seletor);
// };

// Dom.prototype.ativo = function (classe){
//     this.element.classList.add(classe);
// }

// const ul = new Dom ('ul')

// const li = {
//     element: document.querySelector('li')
// };


// Dom.prototype.ativo.call('li', 'ativar');


// //function.apply() => igual o .call mas os parametros são passados em uma array

const numeros = [20, 23, 25, 2];

console.log(Math.max.apply(null, numeros));

//Argumentos comuns com bind

function imc(altura, peso) {
    return peso / (altura * altura )
}

const imc180 = imc.bind(null, 1.80)

imc(1.88, 70);

imc(70)
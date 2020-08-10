// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//     console.log(item.toLowerCase(), index);
// });

// const li = document.querySelectorAll('li');

// const retornoForEach = li.forEach(item => item.classList.add('active'));

// console.log(retornoForEach);//Undefined

// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item, index, array) => {
//     console.log(item, index, array);
//     return item;
// });

// const numeros = [2, 4, 5, 6, 3];
// const numerosx2 = numeros.map((item) => {
//     return item*2;
// })

// console.log(numerosx2)

// console.log(novaArray);

// const aulas = [
//     {
//         nome: 'HTML',
//         min: 15
//     },
//     {
//         nome: 'CSS',
//         min: 20
//     },
//     {
//         nome: 'CSS 2',
//         min: 30
//     },
//     {
//         nome: 'JS',
//         min: 45
//     }
// ];

// const tempoAulas = aulas.map((aula) => {
//     return aula.min;
// });

// const nomeAulas = aula => aula.nome;

// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(tempoAulas);
// console.log(arrayNomeAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item)=> {
//     console.log('oi')
//     console.log(acumulador);
// }, 0);

// console.log(reduceAulas);

// const numeros = [10, 24, 30, 2, 39, 123];

// const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual
// )

// console.log(maiorNumero);

const aulas = [
    {
        nome: 'HTML',
        min: 15
    },
    {
        nome: 'CSS',
        min: 20
    },
    {
        nome: 'CSS 2',
        min: 30
    },
    {
        nome: 'JS',
        min: 45
    }
];

const listaAulas = aulas.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
}, {})

console.log(listaAulas)

const frutas = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
    return item === 'Uva'
})

console.log(temUva)

const nTemUva = frutas.every((item) => {
    return item;
})

console.log(temUva)


const numeros = [6, 43, 22, 23];

const maiorQue3 = numeros.every (n => n > 3 );

console.log(maiorQue3);


const indexUva = frutas.findIndex((item) => item === 'Uva')

console.log(indexUva);

const buscaUva = frutas.find((item) => item === 'Uva');

console.log(buscaUva)


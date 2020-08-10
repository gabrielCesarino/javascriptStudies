// const instrumentos = ['Violão', 'Guitarra'];
// const precos = [49, 91];

// precos [1] = precos[1] - 10;
// console.log(precos[1]);

// const li = document.querySelectorAll('li');

// console.log(Array.from(li));

// const frutas = ['Banana', ['Maçã', 'Melp']]

// console.log(frutas.length)

// console.log(instrumentos.splice(1, 0, 'carro'))

// //Concat

// const transporte1 = ['Barco', 'Vela'];
// const transporte2 = ['Carro', 'Moto'];

// console.log(transporte1.concat(transporte2));

//Slice

const linguagens = ['html', 'css','js'];

console.log(linguagens.slice())

//Exercicios

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
//Remova o primeiro valor de comidas e coloque em uma variavel;

comidasPrimeiro = comidas.shift(); 

//Remova o último valor de comidas e coloque em uma variável

comidasUltimo = comidas.pop();

// Adicione 'Arroz' ao final da array;

comidas.push('Arroz');

//Adicione 'Peixe' e 'Batata' ao inicio da array

comidas.unshift('Peixe', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

//Arrume os estudantes em ordem alfabetica

estudantes.sort();

//Inverta a ordem dos estudantes

estudantes.reverse();

//Verifique se a Joana faz parte dos estudantes

console.log(estudantes.includes('Joana'));

//Verifique se Juliana faz parte dos estudantes

console.log(estudantes.includes('Juliana'));

let html = `<section>
                <div> Sobre </div>
                <div> Produtos </div>
                <div> Contato </div>
            </section`;

//Substitua section por ul e div por li
//usando split e join

html = html.split('section').join('ul');

console.log(html);

html = html.split('div').join('li');

console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

//Remova o último carro, mas antes de remover salve a Array origin em outra variável

const cloneCarros = carros.slice();

carros.pop();

console.log(carros);

console.log(cloneCarros);
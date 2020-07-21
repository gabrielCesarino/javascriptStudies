const href = location.href//window é global por tanto não precisa ser chamado para acessar os métodos que possui.

const h1Text = document.querySelector('h1')//document faz referência ao HTML

console.log(h1Text.innerHTML)
// referenciando a TAG HTML
const h1 = document.querySelector('h1')

// colocando todo seu contúdo separado (letra por letra)
// dentro de uma lista
const list = h1.innerHTML.split('')

// apagando todo o conteúdo que existia
h1.innerHTML = ''

// para cada elemento na lista adicione o seu valor a TAG
list.forEach((element, position) => setTimeout(() => h1.innerHTML += element, 80 * position))

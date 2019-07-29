//Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img');

//Retorne no console apenas imagens que começam com a palavra IMAGEM
const imagem = document.querySelectorAll('img[src^="img/imagem"]');

//Selecione todos os links internos (Onde hjref começa com #)
const links = document.querySelectorAll('[href^="#"]');

//Selecione o primeiro h dentro de .animais-descricao
const h2Anim = document.querySelector(.animais-descricao h2);

//Selecione o ultimo P do site

const lastP = document.querySelectorAll('p');
console.log(lastP[lastP.lenght-1]);

//FOR EACH

let i = 0;
imgs.forEach(Funtion(item, index, array){
    console.log(item, index, array);
});

//Pra converter htmlArray
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

//Mostre no console cada paragrafo do site
const parag = document.querySelectorAll('p');
parag.forEach(function(item){
  .console.log(item);
});

//Mostre o texto dos paragrafos
parag.forEach(function(item){
  .console.log(item.innerText);
});

//Setar um atributo do html
img.setAttribute('alt', 'Raposa');

//Verifica se possui atributo
const possuiAlt = img.hasAttribute('alt');

//Adicione a classe ativo para todos os itens de .menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) =>{
  item.classList.add('ativo');
});

//remover a classe ativo do primeiro elemento de .itensMenu
itensMenu[0].classList.remove('ativo');

// Verificar se img contem 'alt'
itensMenu.forEach((item) =>{
  item.hasAttribute('alt');
});

//Modificar o href do link externo do menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');

//Distancia de um elemento ao topo da pagina
const img = document.querySelector('img');
const imgTop = img.offsetTop;

//Retorne a soma da largura de todas
function somaImagens(){
  const imgs = document.querySelectorAll('img');
  let largura = 0;
  img.forEach((img) =>{
    largura += img.offsetWidith;
  });
  console.log(largura);
}

window.onload = function (){
  somaImagens();
}

//verificar se os links da página tem o minimo para click com o Dedo. (48px/48px)
const links = document.querySelectorAll('a');
links.forEach((link) =>{
  const linkWidth = link.offsetWidith;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link, 'aceitavel');
  }
})

//Se o Browser for maior que 720 px, aplicar classe menu-mobile
const browserSmall = window.machMedia('(max-width: 720px)').matches;
if(browserSmall){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

//Adicionar classe ativo e remover dos demais
//Feito nos LINKS do site
//Previna comportamento padrão
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
  event.preventDefault();
  linksInternos.forEach((link) =>{
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) =>{
  link.addEventListener('click', handleLink);
})

//Selecionar TODOS os elementos a partir do BODY
//Ao click mostrar quais elementos estão sendo clickados

const tudo = document.querySelectorAll('body *');

function handleElemento(event){
  event.currentTarget.remove();
}

tudo.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
});

//Se o usuario clickar em T aumente todo o texto do site

function handleKeyboard(event){
  if(event.key === 't'){
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleKeyboard);

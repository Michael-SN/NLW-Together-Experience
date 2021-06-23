// Toggle menu - abrir e fechar
const $nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (let element of toggle) {
  element.addEventListener('click', function () {
    $nav.classList.toggle('show')
  })
}

// escuta dos links do menu aberto
const links = document.querySelectorAll('nav ul li a')

for (let link of links) {
  link.addEventListener('click', function () {
    $nav.classList.remove('show')
  })
}

// ALterando o HEADER no scroll

const $header = document.querySelector('#header')
const navHeight = $header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // maior que a alura do header
    $header.classList.add('scroll')
  } else {
    // menor que a alura do header
    $header.classList.remove('scroll')
  }
})

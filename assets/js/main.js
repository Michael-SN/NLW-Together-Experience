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

// SWIPER CARROUSEL - TESTIMONTIALS
// SWIPER FUNCTION
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// SCROLLREVEALJS -  mostrar elementos no scroll da pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
`,
  { interval: 100 }
)

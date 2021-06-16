/* -------------------- NAVIGATION | STICKY --------------------------- */

var nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 700) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }
}

/* -------------------- HIGHLIGHT NAV LINKS ----------------- */
var sections = document.querySelectorAll('section')
var navLi = document.querySelectorAll('nav a')

window.addEventListener('scroll', () => {
  let current = ''

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 400
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id')
    }
  })

  navLi.forEach((a) => {
    a.classList.remove('current')
    if (a.classList.contains(current)) {
      a.classList.add('current')
    }
  })
})

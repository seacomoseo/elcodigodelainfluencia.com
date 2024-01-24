import { scrollShot } from './scroll-shot.js'

const rotateElements = document.querySelectorAll('#beneficios .column--item-2 .column__content .image')

if (rotateElements[0]) {
  function rotate (e) {
    const speed = 3
    const parent = e.parentElement
    const parentTop = parent.getBoundingClientRect().top
    const partialHeight = window.innerHeight / speed
    const pos = parentTop / speed - partialHeight
    if (pos < -30 && pos > -270) e.style.transform = `rotateY(${-60 - pos}deg)`
  }

  scrollShot({
    rootMargin: '0%',
    query: '#beneficios .column--item-2 .column__content .image',
    doStart: e => e.classList.add('rotate-scroll'),
    doEnd: e => e.classList.remove('rotate-scroll')
  })

  window.addEventListener('scroll', () => {
    rotateElements.forEach(e => {
      if (e.classList.contains('rotate-scroll')) {
        rotate(e)
      }
    })
  })
}

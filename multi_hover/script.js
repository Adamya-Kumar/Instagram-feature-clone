var elem = document.querySelectorAll('.elem')

elem.forEach((index) => {
  index.addEventListener('mouseenter', (event) => {
    index.childNodes[3].style.opacity = 1
  })
  index.addEventListener('mouseleave', (event) => {
    index.childNodes[3].style.opacity = 0
  })
  index.addEventListener('mousemove', (event) => {
    index.childNodes[3].style.left = event.x + 'px'
    index.childNodes[3].style.top = event.y + 'px'
  })
})

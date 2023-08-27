var main = document.querySelector('.main')
var crs = document.querySelector('.cursor')

main.addEventListener('mousemove', (event) => {
  crs.style.backgroundColor = 'white'
  crs.style.left = event.x + 'px'
  crs.style.top = event.y + 'px'
})

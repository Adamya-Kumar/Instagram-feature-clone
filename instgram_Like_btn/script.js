var ctn = document.querySelector('#container')
var like = document.querySelector('i')
ctn.addEventListener('dblclick', () => {
  like.style.transform = 'translate(-50%, -50%) scale(3)'
  like.style.color = 'rgb(248, 17, 56)'
  setTimeout(() => {
    like.style.transform = 'translate(-50%, -50%) scale(0)'
  }, 600)
})

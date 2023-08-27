let btn_add = document.getElementById('add')
let tag_out = document.querySelector('h5')
let btn_remove = document.getElementById('remove')
var flag = 0
btn_add.addEventListener('click', (event) => {
  if (flag === 0) {
    tag_out.innerHTML = 'Friends'
    btn_add.innerHTML = 'Remove Friend'
    tag_out.style.color = 'green'
    flag = 1
  } else {
    tag_out.innerHTML = 'Stranger'
    btn_add.innerHTML = 'Add friend'
    tag_out.style.color = 'red'
    flag = 0
  }
})

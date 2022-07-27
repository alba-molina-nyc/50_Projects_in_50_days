// when click on menu button -> kick start the class

// 1. grab the items from html page, '.' -> class
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


// 2. variable, add event listener, write what you are listening for, in this case it is 'click', coma, open function
open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))
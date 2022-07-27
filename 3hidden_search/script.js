// 1. bring in elements from html

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// 2. take the button, add event listener

btn.addEventListener('click', () => {
    console.log('clicking button')
    search.classList.toggle('active')
    input.focus()
})

/*
NOTE: a lot of this is jsut putting a lot of events (click, hover)
and making an event fire off
*/

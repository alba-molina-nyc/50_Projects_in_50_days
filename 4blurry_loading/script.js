// 1. grab html elements

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0 //initialize laod, starts at 0

let int = setInterval(blurring, 30)

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    
    loadText.innerText = `${load}%`
}

// 127.0.0.1:5500

// 2. add event listeners 
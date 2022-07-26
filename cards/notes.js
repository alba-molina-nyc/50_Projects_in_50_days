// change the class first one has active
// bring all the panels into js file

// query selector allows to grab anything
// queryselectorall -> addds all of them into a nodeList , similar to an array
const panels = document.querySelectorAll('.panel')
console.log(panels)

// they work like arrays
console.log(panels[0])

// loop through a node list
// forEach -> method, the method takes in a function


// forEach -> method, the method takes in a function
panels.forEach((panel) => {
    // pass in here what you want to use for each iteration

    console.log(panel)
    // event listener on each panel so that when we click it something happens 
    // listen for a click, when that click happens you want to pass in a function
    panel.addEventListener('click'), () => {
        // whatever you click on you want to add a class
        console.log('123')
    }
})
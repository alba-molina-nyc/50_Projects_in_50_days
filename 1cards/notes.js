/*
NOTICE how in your HTML file the div container you set the first div class to "panel active"
and the rest to panel 
* 1. bring all the panels into js file using queryselector (queryselector allows you to grab anything)
* 2. now that you have brought it to js file, you can select it and use the forEach method 
* NOTE queryselectorall -> addds all of them into a nodeList , similar to an array
* NOTE forEach -> method, the method takes in a function
* they work like arrays console.log(panels[0])
*/

// 1.

const panels = document.querySelectorAll('.panel')
    // 2. forEach -> method, the method takes in a function to loop through the nodeList 
    panels.forEach((panel) => {
        // pass in here what you want to use for each iteration
        // event listener on each panel so that when we click it something happens 
        // listen for a click, when that click happens you want to pass in a functionpanel.addEventListener('click', () => {
        // whatever you click on you want to add a class
        console.log('123')
        removeActiveClasses() //function to un-active-ate the previous selection 
        panel.classList.add('active') // makes the selection active on click
    })

  
   


// 3. same function as above but for unselecting(this is the function you are passing in line 23)
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}
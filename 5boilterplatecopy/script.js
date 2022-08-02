/* *  **  **  **  **  **  **  **  **  **  **  **  **  **  Project Section **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  * */
/*  1. bring in the boxes from html */
const boxes = document.querySelectorAll(".box"); /* query selector all because more than one, and it will put into array list */

/*  event listener syntax -> Element.addEventListener(event, function) */
window.addEventListener("scroll", checkBoxes); /* want fire up event when scroll, so on window add even listener of scroll and when that happens we have a function of checkBoxes, bc want to check positioning of each box */

checkBoxes(); /* run checkboxes function here */

function checkBoxes() {
const triggerBottom = window.innerHeight / 5 * 4 /* figure out where is trigger point, when scrolling down when we want to come in */
  boxes.forEach((box) => {
    const boxTop =box.getBoundingClientRect().top; /* var = Element.eventlistener (getboundingclientrect->returns where it is ) */
    if (boxTop < triggerBottom) {
      box.classList.add("show"); /* if less then show */
    } else { 
      box.classList.remove("show"); /* as move up then it removes the show class */
    }
  });
}

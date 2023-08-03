//Simultaneous highlighting of internal and external sidebar items
//get elements which have class name ending with "-menu-item" then filter through each element and element on hover apply hover stylings to the element's menu item class. I may need to use regex for the first part.

/*Remember to leave at 12:10*/

export default function jsStyles() {
  
  
  document.querySelectorAll('[class$="-menu-item"]').forEach(function(element) {
    element.addEventListener("mouseover", function(event) {
      var className = Array.from(event.target.classList).filter((item) => item.endsWith("-menu-item"))
      Array.from(document.getElementsByClassName(className)).forEach(function(e) {
        e.style.backgroundColor = "#2f2f2f"
      })
    })
    //console.log(element.classList.value)
    //on hover select other elements with same class and append new class with hover stylings
    //Make function to remove stylings on mouseout
  })
}
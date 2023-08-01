//Simultaneous highlighting of internal and external sidebar items
//get elements which have class name ending with "-menu-item" then filter through each element and element on hover apply hover stylings to the element's menu item class. I may need to use regex for the first part.

export default function jsStyles() {
  document.querySelectorAll('[class$="-menu-item"]').forEach(function(element) {
    console.log(element)
  })
}
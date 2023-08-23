export default function jsSidebarStyles() {
  document.querySelectorAll('[class$="-menu-item"]').forEach(function(element) {
    element.addEventListener("mouseover", function(event) {
      var className = Array.from(event.target.classList).filter((item) => item.endsWith("-menu-item"))
      Array.from(document.getElementsByClassName(className)).forEach(function(e) {
        e.style.backgroundColor = "#2f2f2f"
      })
    })
    element.addEventListener("mouseleave", function(event) {
      var className = Array.from(event.target.classList).filter((item) => item.endsWith("-menu-item"))
      Array.from(document.getElementsByClassName(className)).forEach(function(e) {
        e.style.backgroundColor = "#424242"
      })
    })
  })
}
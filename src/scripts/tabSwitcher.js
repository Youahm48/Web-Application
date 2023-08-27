export default function jsTabSwitcher() {
  const loginTab = document.getElementById("login-tab")
  const registerTab = document.getElementById("registration-tab")

  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("registration-form")
    
  loginTab.onclick = function() {
    loginTab.classList.remove("inactive")
    registerTab.classList.add("inactive")
    loginForm.style.display = "flex"
    registerForm.style.display = "none"
  }

  registerTab.onclick = function() {
    loginTab.classList.add("inactive")
    registerTab.classList.remove("inactive")
    loginForm.style.display = "none"
    registerForm.style.display = "flex"
  }
}
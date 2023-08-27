export default function jsTabSwitcher(setLoginUsername, setLoginPassword, setRegisterUsername, setRegisterPassword) {
  const loginTab = document.getElementById("login-tab")
  const registerTab = document.getElementById("registration-tab")

  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("registration-form")

  const loginUsername = document.getElementById("login-username")
  const loginPassword = document.getElementById("login-password")
  const registerUsername = document.getElementById("register-username")
  const registerPassword = document.getElementById("register-password")
    
  loginTab.onclick = function() {
    loginTab.classList.remove("inactive")
    registerTab.classList.add("inactive")
    loginForm.style.display = "flex"
    registerForm.style.display = "none"
    setRegisterUsername("")
    setRegisterPassword("")
    registerUsername.value = ""
    registerPassword.value = ""
  }

  registerTab.onclick = function() {
    loginTab.classList.add("inactive")
    registerTab.classList.remove("inactive")
    loginForm.style.display = "none"
    registerForm.style.display = "flex"
    setLoginUsername("")
    setLoginPassword("")
    loginUsername.value = ""
    loginPassword.value = ""
  }
}
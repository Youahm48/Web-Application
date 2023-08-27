import React from "react"

import Header from "../components/Header"

import "../stylesheets/routes/Register.css"

import jsTabSwitcher from "../scripts/tabSwitcher.js"

export default function Register(props) {
  React.useEffect(() => {
    jsTabSwitcher(setLoginUsername, setLoginPassword, setRegisterUsername, setRegisterPassword)
  })

  const [loginUsername, setLoginUsername] = React.useState("")
  const [loginPassword, setLoginPassword] = React.useState("")
  const [registerUsername, setRegisterUsername] = React.useState("")
  const [registerPassword, setRegisterPassword] = React.useState("")

  function handleLoginUsernameChange() {
    setLoginUsername(event.target.value)
  }

  function handleLoginPasswordChange() {
    setLoginPassword(event.target.value)
  }

  function handleRegisterUsernameChange() {
    setRegisterUsername(event.target.value)
  }

  function handleRegisterPasswordChange() {
    setRegisterPassword(event.target.value)
  }

  function login() {
    event.preventDefault()
    console.log(loginUsername)
    console.log(loginPassword)
    console.log(registerUsername)
    console.log(registerPassword)
  }

  function register() {
    event.preventDefault()
    console.log(loginUsername)
    console.log(loginPassword)
    console.log(registerUsername)
    console.log(registerPassword)
  }
  
  return(
      <div id="vertical-container">
        <Header />
        <div id="main">
          <div id="form-container">
            <div id="form">
              <div id="form-header">
                <img id="logo-spin" src="/logo.png" />
              </div>
              <div id="main-form">
                <div id="tabs">
                  <div id="login-tab">Log in</div>
                  <div id="registration-tab" class="inactive">Register</div>
                </div>
                <form id="login-form" onSubmit={login}>
                  <p>Username</p>
                  <input onChange={handleLoginUsernameChange} id="login-username" required></input>
                  <p>Password</p>
                  <input onChange={handleLoginPasswordChange} id="login-password" required></input>
                  <button type="submit" id="login-button">Log in</button>
                </form>
                <form id="registration-form" onSubmit={register}>
                  <p>Username</p>
                  <input onChange={handleRegisterUsernameChange} id="register-username" required></input>
                  <p>Password</p>
                  <input onChange={handleRegisterPasswordChange} id="register-password" required></input>
                  <button type="submit" id="register-button">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
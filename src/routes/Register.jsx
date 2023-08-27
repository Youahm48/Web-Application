import React from "react"

import Header from "../components/Header"

import "../stylesheets/routes/Register.css"

import jsTabSwitcher from "../scripts/tabSwitcher.js"

export default function Register(props) {
  React.useEffect(() => {
    jsTabSwitcher()
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
                <div id="login-form">
                  <p>Username</p>
                  <input onChange={handleLoginUsernameChange} id="username"></input>
                  <p>Password</p>
                  <input onChange={handleLoginPasswordChange} id="password"></input>
                  <button id="login-button">Log in</button>
                </div>
                <div id="registration-form">
                  <p>Username</p>
                  <input onChange={handleRegisterUsernameChange} id="username"></input>
                  <p>Password</p>
                  <input onChange={handleRegisterPasswordChange} id="password"></input>
                  <button id="register-button">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
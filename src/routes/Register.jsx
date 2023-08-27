import React from "react"
import axios from "axios"

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

  
  async function Register(username, password) {
    const fetchData = await axios.get("https://web-application.logicerror.repl.co/database/find", {
      headers: {
        userid: username,
      }
    })

    if(fetchData.data == "User does not exist") {
      const register = await axios.get("https://web-application.logicerror.repl.co/database/register", {
        headers: {
          userid: username,
          password: password
        }
      })
      return "You have been registered successfully"
    }
    else {
      return "User already exists"
    }
  }

  async function Login(username, password) {
    const login = await axios.get("https://web-application.logicerror.repl.co/database/login", {
      headers: {
        userid: username,
        password: password
      }
    })

    return login.data
  }

  async function login() {
    event.preventDefault()
    console.log(loginUsername)
    console.log(loginPassword)
    console.log(registerUsername)
    console.log(registerPassword)
    const msg = await Login(loginUsername, loginPassword)
    console.log(msg)
    document.getElementById("login-label").innerHTML = msg
  }

  async function register() {
    event.preventDefault()
    const msg = await Register(registerUsername, registerPassword)
    document.getElementById("register-label").innerHTML = msg
    if(msg == "You have been registered successfully") {
      window.location.replace("https://web-application.logicerror.repl.co/")
    }
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
                  <h6 id="login-label"></h6>
                </form>
                <form id="registration-form" onSubmit={register}>
                  <p>Username</p>
                  <input onChange={handleRegisterUsernameChange} id="register-username" required></input>
                  <p>Password</p>
                  <input onChange={handleRegisterPasswordChange} id="register-password" required></input>
                  <button type="submit" id="register-button">Register</button>
                  <h6 id="register-label"></h6>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
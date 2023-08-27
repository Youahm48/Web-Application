import React from "react"

import Header from "../components/Header"

import "../stylesheets/routes/Register.css"

export default function Register(props) {
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
                  <div id="registration-tab">Register</div>
                </div>
                <div id="login-form">
                  <p>Username</p>
                  <input id="username"></input>
                  <p>Password</p>
                  <input id="password"></input>
                  <button id="login-button">Log in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
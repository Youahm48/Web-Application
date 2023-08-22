import React from "react"
import "../stylesheets/components/Header.css"

export default function Header() {
  return(
    <div id="header">
      <img id="logo" src="/logo.png"/>
      <div id="title">Title</div>
      <div id="profile-container">
        <a href="/register" id="login-button">Log in</a>
      </div>
    </div>
  )
}
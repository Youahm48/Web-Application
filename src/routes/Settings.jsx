import React from "react"

import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

import "../stylesheets/routes/Settings.css"

export default function Settings(props) {
  return(
    <div id="horizontal-container">
      <Sidebar/>
      <div id="vertical-container">
        <Header />
        <div id="main">
          
        </div>
      </div>
    </div>
  )
}
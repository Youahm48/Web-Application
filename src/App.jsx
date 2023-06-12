import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Toolbar from "./components/Toolbar"
import ListContainer from "./components/ListContainer"
import './App.css'

export default function App() {
  return(
    <div id="horizontal-container">
      <Sidebar/>
      <div id="vertical-container">
        <Header />
        <div id="main">
          <Toolbar />
          <ListContainer />
        </div>
      </div>
    </div>
  )
}

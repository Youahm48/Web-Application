import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Toolbar from "./components/Toolbar"
import ListCard from "./components/ListCard"
import './App.css'

export default function App() {
  return(
    <div id="horizontal-container">
      <Sidebar/>
      <div id="vertical-container">
        <Header />
        <div id="main">
          <Toolbar />
          <div id="list-header">
            <div>Task name</div>
            <div>Due date</div>
            <div>Priority</div>
            <div>Subject</div>
          </div>
          <ListCard status="incomplete" name="Task 1" dueDate="Today" priority="Low" subject="Project" />
        </div>
      </div>
    </div>
  )
}

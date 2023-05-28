import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ListCard from "./components/ListCard"
import CreateCardModal from "./modals/CreateCardModal"
import './App.css'

function openModal() {
  
}

export default function App() {
  return(
    <div id="horizontal-container">
      <Sidebar/>
      <div id="vertical-container">
        <Header />
        <div id="main">
          <div id="toolbar" className="material-symbols-outlined">
            <div id="create-card">
              <button id="create-card-button" className="material-symbols-outlined" onClick={openModal}></button>
              <div id="create-card-label">add_box</div>
            </div>
          </div>
          <div id="list-header">
            <div>Task name</div>
            <div>Due date</div>
            <div>Priority</div>
            <div>Subject</div>
          </div>
          <ListCard status="incomplete" name="Task 1" dueDate="Today" priority="Low" subject="Project" />
          {/*<CreateCardModal/>*/}
        </div>
      </div>
    </div>
  )
}

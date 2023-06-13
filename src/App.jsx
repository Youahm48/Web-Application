import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Toolbar from "./components/Toolbar"
import ListContainer from "./components/ListContainer"
import ListCard from "./components/ListCard"
import './App.css'

import CreateCardModal from "./modals/CreateCardModal"

export default function App() {
  const [tasks, setTasks] = React.useState([])

  function addTask(taskObject) {
    setTasks([
      ...tasks,
      taskObject
    ])
  }

  const [isOpen, setIsOpen] = React.useState("")
  
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  
  return(
    <div id="horizontal-container">
      <Sidebar/>
      <div id="vertical-container">
        <Header />
        <div id="main">
          <CreateCardModal isOpen={isOpen} closeModal={closeModal} addTask={addTask} />
          <Toolbar openModal={openModal} />
          <ListContainer tasks={tasks} />
        </div>
      </div>
    </div>
  )
}

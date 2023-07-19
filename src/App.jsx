import React from "react"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Toolbar from "./components/Toolbar"
import ListContainer from "./components/ListContainer"
import ListCard from "./components/ListCard"

import CreateCardModal from "./modals/CreateCardModal"

import './App.css'

//import Database from "./scripts/Database.js"

export default function App() {
  const [tasks, setTasks] = React.useState([])

  function addTask(taskObject) {
    setTasks([
      ...tasks,
      taskObject
    ])
  }

  function toggleTaskStatus(event) {
    const updatedTasks = tasks.map(
      function(task) {
        if(task.id == event.target.parentElement.id) {
          return { ...task, isComplete: !task.isComplete }
        }
        return task
      }
    )
    setTasks(updatedTasks)
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
          <ListContainer tasks={tasks} toggleTaskStatus={toggleTaskStatus}/>
        </div>
      </div>
    </div>
  )
}

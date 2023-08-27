import React from "react"
import axios from "axios"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Toolbar from "./components/Toolbar"
import ListContainer from "./components/ListContainer"
import ListCard from "./components/ListCard"

import CreateCardModal from "./modals/CreateCardModal"

import './App.css'

export default function App(props) {
  if(!localStorage.getItem("user")) {
    window.location.replace("https://web-application.logicerror.repl.co/register")
  }

  const user = JSON.parse(localStorage.getItem("user"))

  console.log(user)
  console.log(user.username)

  async function loadTasks() {
    try {
      const fetchData = await axios.get("https://web-application.logicerror.repl.co/database/find", {
        headers: {
          userid: user.username,
          //Change to process.env auth key
          authorisation: "Yes"
        }
      })
  
      return fetchData.data.taskList
    } catch (error) {
      console.log(error)
    }
  }
  
  async function saveTasks(taskList) {
    try {
      const fetchData = await axios.get("https://web-application.logicerror.repl.co/database/updatetasks", {
        headers: {
          userid: user.username,
          tasklist: JSON.stringify(taskList),
          authorisation: "Yes"
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  const [tasks, setTasks] = React.useState([])
console.log(tasks[0])
  //change to a function that executes only once at load in
  if(!tasks[0]) {
    loadTasks().then(function (taskList) {
      setTasks(taskList)
    })
  }

  function addTask(taskObject) {
    setTasks([
      ...tasks,
      taskObject
    ])
    saveTasks([
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
    saveTasks(updatedTasks)
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
      <Sidebar />
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

import React from "react"
import axios from "axios"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Toolbar from "./components/Toolbar"
import ListContainer from "./components/ListContainer"
import ListCard from "./components/ListCard"

import CreateCardModal from "./modals/CreateCardModal"

import jsStyles from "./scripts/styles.js"

import './App.css'

async function loadTasks() {
  try {
    //Change url and server route to a process.env url
    const fetchData = await axios.get("https://web-application.logicerror.repl.co/database/find", {
      headers: {
        //change to actual user
        userid: "defaultuser",
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
        //change to actual user later
        userid: "defaultuser",
        tasklist: JSON.stringify(taskList),
        //change to auth key later
        authorisation: "Yes"
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export default function App() {
  const [tasks, setTasks] = React.useState([])

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
  }

  const [isOpen, setIsOpen] = React.useState("")
  
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  
  jsStyles()
  
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

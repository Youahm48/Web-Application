import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Toolbar from "./components/Toolbar"
import ListContainer from "./components/ListContainer"
import ListCard from "./components/ListCard"
import './App.css'

//const [tasks, setTasks] = React.useState(props.tasks)
//Test Data
const tasks = [{
  status: "incomplete",
  name: "Task 1",
  dueDate: "Today",
  priority: "Low",
  subject: "Project"
},
{
  status: "complete",
  name: "Task 2",
  dueDate: "Tomorrow",
  priority: "Medium",
  subject: "Random task"
},
{
  status: "incomplete",
  name: "Task 3",
  dueDate: "Yesterday",
  priority: "High",
  subject: "A subject"
}]

export default function App() {

/*  const taskList = tasks.map(
    function(task) {
      return(
        <ListCard status="incomplete" name="Task 1" dueDate="Today" priority="Low" subject="Project" />
      )
    }
  )*/
  
  return(
    <div id="horizontal-container">
      <Sidebar/>
      <div id="vertical-container">
        <Header />
        <div id="main">
          <Toolbar />
          <ListContainer tasks={tasks} />
        </div>
      </div>
    </div>
  )
}

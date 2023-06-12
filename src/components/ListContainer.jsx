import React from "react"
import ListCard from "./ListCard"
import "../stylesheets/components/ListContainer.css"

export default function ListContainer() {
  return(
    <div id="list-container">
      <div id="list-header">
        <div>Task name</div>
        <div>Due date</div>
        <div>Priority</div>
        <div>Subject</div>
      </div>
      <ListCard status="incomplete" name="Task 1" dueDate="Today" priority="Low" subject="Project" />
    </div>
  )
}
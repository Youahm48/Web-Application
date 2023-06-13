import React from "react"
import ListCard from "./ListCard"
import "../stylesheets/components/ListContainer.css"

export default function ListContainer(props) {
  const listItems = props.tasks.map(
    function(item) {
      return(
        <ListCard
          status={item.status}
          name={item.name}
          deadline={item.deadline}
          priority={item.priority}
          subject={item.subject}
        />
      )
    }
  )
  
  return(
    <div id="list-container">
      <div id="list-header">
        <div>Task name</div>
        <div>Due date</div>
        <div>Priority</div>
        <div>Subject</div>
      </div>
      <div id="card-container">
        {listItems}
      </div>
    </div>
  )
}
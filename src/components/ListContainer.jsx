import React from "react"
import ListCard from "./ListCard"
import "../stylesheets/components/ListContainer.css"

export default function ListContainer(props) {
  const completeListItems = props.tasks.map(
    function(item) {
      if(item.isComplete) {
        return(
          <ListCard
            id={item.id}
            isComplete={item.isComplete}
            name={item.name}
            deadline={item.deadline}
            priority={item.priority}
            subject={item.subject}
            toggleTaskStatus={props.toggleTaskStatus}
          />
        )
      }
    }
  )

  const incompleteListItems = props.tasks.map(
    function(item) {
      if(!item.isComplete) {
        return(
          <ListCard
            id={item.id}
            isComplete={item.isComplete}
            name={item.name}
            deadline={item.deadline}
            priority={item.priority}
            subject={item.subject}
            toggleTaskStatus={props.toggleTaskStatus}
          />
        )
      }
    }
  )
  
  return(
    <div id="list-container">
      <div id="incomplete-card-container">
        <div id="incomplete-card-header">Incomplete:</div>
        <div className="list-header">
          <div>Task name</div>
          <div>Deadline</div>
          <div>Priority</div>
          <div>Subject</div>
        </div>
        {incompleteListItems}
      </div>
      <div id="complete-card-container">
        <div id="complete-card-header">Complete:</div>
        <div className="list-header">
          <div>Task name</div>
          <div>Deadline</div>
          <div>Priority</div>
          <div>Subject</div>
        </div>
        {completeListItems}
      </div>
    </div>
  )
}
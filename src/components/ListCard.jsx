import React from "react"
import "../stylesheets/components/ListCard.css"

export default function ListCard(props) {
  var checkbox;
  if(props.isComplete) {
    checkbox = <button id="checkbox" className="material-symbols-outlined" onClick={props.toggleTaskStatus}>check_box</button>
  }
  else {
    checkbox = <button id="checkbox" className="material-symbols-outlined" onClick={props.toggleTaskStatus}>check_box_outline_blank</button>
  }
  return(
    <div id={props.id} className="list-card">
      {checkbox}
      <div className="list-card-data-container">
        <div>{props.name}</div>
        <div>
          <div>{new Date(props.deadline).toLocaleDateString("en-GB")}</div>
          <div>{new Date(props.deadline).toLocaleTimeString("en-US", {hour: "numeric", minute: "numeric"})}</div>
        </div>
        <div>{props.priority}</div>
        <div>{props.subject}</div>
      </div>
    </div>
  )
}
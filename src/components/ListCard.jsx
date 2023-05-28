import React from "react"
import "../stylesheets/components/ListCard.css"

export default function ListCard(props) {
  return(
    <div className="list-card">
      <button id="checkbox" className="material-symbols-outlined">check_box_outline_blank</button>
      <div className="list-card-data-container">
        <div>{props.name}</div>
        <div>{props.dueDate}</div>
        <div>{props.priority}</div>
        <div>{props.subject}</div>
      </div>
    </div>
  )
}
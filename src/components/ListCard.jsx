import React from "react"
import "../stylesheets/components/ListCard.css"

export default function ListCard(props) {
  //Should I change checkbox button to input and use toggle complete task as onchange function?
  
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
        <div>{props.deadline}</div>
        <div>{props.priority}</div>
        <div>{props.subject}</div>
      </div>
    </div>
  )
}
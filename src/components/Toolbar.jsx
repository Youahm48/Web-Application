import React from "react"
import "../stylesheets/components/Toolbar.css"

export default function Toolbar(props) {
  return(
    <div>
      <div id="toolbar" className="material-symbols-outlined">
        <div id="create-card">
          <button id="create-card-button" className="material-symbols-outlined" onClick={props.openModal}>add</button>
        </div>
      </div>
    </div>
  )
}
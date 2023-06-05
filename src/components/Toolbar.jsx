import React from "react"
import "../stylesheets/components/Toolbar.css"

function createCard() {
  console.log("r")
}

export default function Toolbar() {
  return(
    <div id="toolbar" className="material-symbols-outlined">
      <div id="create-card">
        <button id="create-card-button" className="material-symbols-outlined" onClick={createCard}>add</button>
      </div>
    </div>
  )
}
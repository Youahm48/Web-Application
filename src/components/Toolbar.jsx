import React from "react"
import CreateCardModal from "../modals/CreateCardModal"
import "../stylesheets/components/Toolbar.css"

export default function Toolbar() {
  const [isOpen, setIsOpen] = React.useState("")
  
  function openCreateCardModal() {
      setIsOpen(true)
  }
  
  return(
    <div>
      <div id="toolbar" className="material-symbols-outlined">
        <div id="create-card">
          <button id="create-card-button" className="material-symbols-outlined" onClick={openCreateCardModal}>add</button>
        </div>
      </div>
      <CreateCardModal isOpen={isOpen} />
    </div>
  )
}
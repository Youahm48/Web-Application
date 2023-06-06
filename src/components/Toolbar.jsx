import React from "react"
import CreateCardModal from "../modals/CreateCardModal"
import "../stylesheets/components/Toolbar.css"

export default function Toolbar() {
  const [isOpen, setIsOpen] = React.useState("")
  
  function openModal() {
      setIsOpen(true)
  }

  function cancel() {
    setIsOpen(false)
  }
  
  return(
    <div>
      <div id="toolbar" className="material-symbols-outlined">
        <div id="create-card">
          <button id="create-card-button" className="material-symbols-outlined" onClick={openModal}>add</button>
        </div>
      </div>
      <CreateCardModal isOpen={isOpen} cancel={cancel} />
    </div>
  )
}
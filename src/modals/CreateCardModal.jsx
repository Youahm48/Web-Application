import React from "react"
import "../stylesheets/modals/CreateCardModal.css"

export default function CreateCardModal() {
  return(
    <div id="create-card-modal-background">
      <div id="create-card-modal">
        <div id="create-card-form">
          <div id="create-card-form-header">
          </div>
          <div id="create-card-form-body">
            <div>Name <input/></div>
            <div>Time <input/></div>
            <div>Priority <input/></div>
            <div>Subject <input/></div>
          </div>
          <div id="create-card-form-footer">
            <button class="active-confirm">Confirm</button>
            <button class="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
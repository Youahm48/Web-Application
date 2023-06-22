import React from "react"
import { nanoid } from "nanoid"
import "../stylesheets/modals/CreateCardModal.css"

export default function CreateCardModal(props) {
  const [name, setName] = React.useState("")
  const [deadline, setDeadline] = React.useState("")
  const [priority, setPriority] = React.useState("")
  const [subject, setSubject] = React.useState("")
  
  function handleSubmit(event) {
    event.preventDefault()
    props.addTask({
      id: `Task-${nanoid()}`,
      isComplete: false,
      name: name,
      deadline: deadline,
      priority: priority,
      subject: subject
    })
    setName("")
    setDeadline("")
    setPriority("")
    setSubject("")
    console.log(name)
    console.log(deadline)
    console.log(priority)
    console.log(subject)
    props.closeModal()
  }

  function handleCancel() {
    setName("")
    setDeadline("")
    setPriority("")
    setSubject("")
    props.closeModal()
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }
  function handleDeadlineChange(event) {
    setDeadline(new Date(event.target.value).toISOString())
  }
  function handlePriorityChange(event) {
    setPriority(event.target.value)
  }
  function handleSubjectChange(event) {
    setSubject(event.target.value)
  }
  
  if(!props.isOpen) {
    return null
  }
  
  return(
    <div id="create-card-modal-background">
      <div id="create-card-modal">
        <form id="create-card-form" onSubmit={handleSubmit}>
          <div id="create-card-form-header">
          </div>
          <div id="create-card-form-body">
            <div>
              <p>Name</p>
              <input onChange={handleNameChange} />
            </div>
            <div>
              <p>Deadline</p>
              <input type="datetime-local" onChange={handleDeadlineChange} />
            </div>
            <div>
              <p>Priority</p>
              <input onChange={handlePriorityChange} />
            </div>
            <div>
              <p>Subject</p>
              <input onChange={handleSubjectChange} />
            </div>
          </div>
          <div id="create-card-form-footer">
            <button type="submit" className="active-confirm">Confirm</button>
            <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
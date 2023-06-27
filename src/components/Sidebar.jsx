import React from "react"
import "../stylesheets/components/Sidebar.css"

export default function Sidebar() {
  function expand() {

  }

  function collapse() {
    
  }
  
  return(
    <div id="sidebar">
      <div id="sidebar-internal">
        <div id="sidebar-internal-header">
          <img id="sidebar-logo" src="../public/logo.png"/>
          {/*<div id="sidebar-title">Title</div>*/}
        </div>
        <div id="sidebar-internal-content">
          <div id="sidebar-internal-view-container">
            <div>Home</div>
            <div>Tasks</div>
            <div>Calendar</div>
          </div>
          <div id="sidebar-internal-footer">
            <div>Documentation</div>
            <div>Settings</div>
          </div>
        </div>
      </div>
      <div id="sidebar-external">
        <button id="sidebar-toggle" className="material-symbols-outlined">menu</button>
        <div className="sidebar-section">
          <a className="material-symbols-outlined sidebar-item">home</a>
          <a className="material-symbols-outlined sidebar-item">check_circle</a>
          <a className="material-symbols-outlined sidebar-item">calendar_month</a>
        </div>
        <div id="bottom-sidebar-section" className="sidebar-section">
          <a className="material-symbols-outlined sidebar-item">help</a>
          <a className="material-symbols-outlined sidebar-item">settings</a>
        </div>
      </div>
    </div>
  )
}
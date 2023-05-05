import Header from "./components/Header"
import './App.css'

export default function App() {
  return(
    <div id="horizontal-container">
      <div id="sidebar">
        <span id="sidebar-toggle" className="material-symbols-outlined">menu</span>
        <div className="sidebar-section">
          <a className="material-symbols-outlined sidebar-item">home</a>
          <a className="material-symbols-outlined sidebar-item">view_list</a>
          <a className="material-symbols-outlined sidebar-item">settings</a>
        </div>
        <div className="sidebar-section">
          <a className="material-symbols-outlined sidebar-item">view_list</a>
          <a className="material-symbols-outlined sidebar-item">home</a>
          <a className="material-symbols-outlined sidebar-item">settings</a>
        </div>
      </div>
      <div id="vertical-container">
        <Header/>
        <div id="main">r</div>
      </div>
    </div>
  )
}

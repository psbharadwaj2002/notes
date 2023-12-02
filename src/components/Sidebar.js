import React from 'react'
import "../styles/sidebar/sidebar.css"
import description from "../images/description.png"

function Sidebar() {
  return (
    <div className='sidebar'>
        <h1>Notes App</h1>
        <button> <img src={description}/>Notes</button>
    </div>
  )
}

export default Sidebar
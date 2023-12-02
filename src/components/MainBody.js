import React from 'react'
import "../styles/mainbody/mainbody.css"
import data from '../data/data'
import AddNote from './AddNote'
import DisplayNote from './DisplayNote'

function MainBody() {
  return (
    <div className='mainbody'>

        <AddNote/>
        <DisplayNote/>
    </div>
  )
}

export default MainBody
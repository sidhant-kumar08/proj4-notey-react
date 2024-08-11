import React from 'react'
import { Link } from 'react-router-dom'
import Notes from './Notes'

function ViewNotes() {
  return (
    <>
      
      <Link to='/' className='back-btn-add'>{'< Back to home'}</Link>
      <div className="notes-page">
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
            <Notes />
      </div>
      

    </>
  )
}

export default ViewNotes

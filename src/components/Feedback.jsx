import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'



function Feedback() {
  const [fbname, setFbname] = useState('')
  const [fbemail, setFbemail] = useState('')
  const [fbmobile, setFbmobile] = useState('')
  const [feedback, setFeedback] = useState('')






  return (
    <div>

      <Link to='/' className='back-btn-add'>{"< Back to home" }</Link>
      <div className='feedback-container'>

        <form onSubmit={(e)=>{
          e.preventDefault();
          console.log({fbname, fbemail, fbmobile, feedback});
        }}>
          
          <h1 className='feedback-title'>Feedback</h1>
          <input type="text" placeholder='Name' name='fb-name'  onChange={(e)=>{
            setFbname(e.target.value);
          }} />
          <input type="text" placeholder='Email' name='fb-email' onChange={(e)=>{
            setFbemail(e.target.value);
          }} />
          <input type="text" placeholder='Mobile No.' name='fb-mobile'  onChange={(e)=>{
            setFbmobile(e.target.value);
          }}/>
          <input  type="text" placeholder='Feedback' name='feedback' onChange={(e)=>{
            setFeedback(e.target.value);
          }}/>
          <button type="submit" className='submit-btn-fb'>SEND</button>
        </form>
      </div>


    </div>
  )
}

export default Feedback

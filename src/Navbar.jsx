import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './components/Logo'
import { FiMenu } from "react-icons/fi";



function Navbar() {
  const [menu, setMenu] = useState(false)
  const [mobilemenu, setMobilemenu] = useState(false)

  return (
    <div>
      <div className='navbar'>
        <div className="logo-container">
          <Logo />
        </div>

        <div className="buttons-container">
          <Link to='/feedback'><button className='feedback-btn'>Feedback</button></Link>
          <button className='menu-btn' onClick={()=>{
            setMenu(!menu);
            console.log(menu)
          }}><FiMenu /></button>

          <button className='mobile-menu' onClick={()=>{
            setMobilemenu(true);
          }}><FiMenu /></button>
        </div>
      </div>




      {menu ? <div className="menu-container">
        <div className="menu">
          <Link to='/' onClick={()=>setMenu(false)}><button>Home</button></Link>
          <Link to='/create' onClick={()=>setMenu(false)}><button>View Notes</button></Link>
          {/* <Link to='' onClick={()=>setMenu(false)}><button>Profile</button></Link> */}
          <Link to='/about' onClick={()=>setMenu(false)}><button>About</button></Link>
          <Link to='/contact' onClick={()=>setMenu(false)}><button>Contact</button></Link>
          
        </div>

      </div> : ""}


      {mobilemenu ? <div className="mobile-menu-container">
        <div className="close-btn" onClick={()=>{
          setMobilemenu(false)
        }}>
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
        <div className="mobile-menu-box">
          <Link to='/' onClick={()=>setMobilemenu(false)}>Home</Link>
          <Link to='/create' onClick={()=>setMobilemenu(false)}>View Notes</Link>
          <Link to='/feedback' onClick={()=>setMobilemenu(false)}>Feedback</Link>
          <Link to='/about' onClick={()=>setMobilemenu(false)}>About</Link>
          <Link to='/contact' onClick={()=>setMobilemenu(false)}>Contact</Link>
        </div>

      </div> : ""}


    </div>
  )
}

export default Navbar

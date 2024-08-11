import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdLink } from "react-icons/io";

function About() {
  return (
    <div>
      <Link to='/' className='back-btn-add'>{"< Back to home" }</Link>

      <div className="about-container">
        <div className="about-title">
          <h1>About</h1>
        </div>

        <div className="about-img">
          <img src="./GithubDP.JPG" alt="image" />
        </div>

        <div className="about-info">
          <p className='about-para'>I'm <span className='span-green'>Sidhant Kumar</span ><Link to='https://github.com/sidhant-kumar08'><IoMdLink className='link-align'/></Link>, a <span  className='span-red'>19-year-old</span> <span className='span-green'>software developer</span> driven by a passion for crafting innovative digital solutions. With a strong foundation in <span className='span-green'>HTML, CSS, and JavaScript,</span> I specialize in building dynamic and interactive <span className='span-red'>web applications</span> using the <span className='span-green'>MERN stack</span>. I'm constantly exploring <span className='span-green'>new technologies</span> and best practices to stay at the forefront of <span className='span-green'>web development.</span> <span className='span-red'>My goal</span> is to create exceptional <span className='span-red'>user experiences</span> that leave a lasting impression. <span className='span-green'>Let's collaborate</span> and bring your <span className='span-red'>digital vision</span> to life!</p>
        </div>
      </div>
    </div>
  )
}

export default About

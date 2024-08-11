import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <>
    <Link to='/' className='back-btn-add'>{"< Back to home" }</Link>
        <div className="contact-container">

            <div className="contact">
              <h1>Contact Me</h1>
              <div className="links-container">
                  <Link to='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwCwSwDZWDjHSckCnzKKzpSqDmsGJGsdcnhPGhHtmJTdXQqLmWSvFBLlGzRfRcnxQxXMxH' target='blank'><img src="./mail.svg" alt="mail"  height={50} width={40} /></Link>
                  <Link target='blank' to='https://www.linkedin.com/in/sidhant08' ><img src="./linkedin.svg" alt="linkedin"  height={50} width={30} /></Link>
                  <Link target='blank' to='https://github.com/sidhant-kumar08' ><img src="./github.svg" alt="github"  height={50} width={30} /></Link>
                  <Link target='blank' to='https://x.com/sidhantkumar_08' ><img src="./twitter.svg" alt="twitter"  height={50} width={30} /></Link>
              </div>
              
            </div>



        </div>
     
    </>
  )
}

export default Contact

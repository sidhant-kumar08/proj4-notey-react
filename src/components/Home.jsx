import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {



  return (
    <>

      <div className="main-wrapper">

        <div className="main-text">

          <div className="title-text">
            <h1>Create. Update. Delete</h1>
          </div>

          <div className="sub-title">
            <h5>Store your thoughts safely.</h5>
          </div>

          <div className="home-btns">
            <div className="gs-button">
              <Link to='/create'>{"Get Started >"}</Link>
            </div>

            <div className="vn-button">
              <Link to='/view'>{"Saved Notes >"}</Link>
            </div>
          </div>
        </div>



        <div className="main-img">
          <img src="../src/assets/main.png" alt="" height={450} width={650} />
        </div>

      </div>
    </>
  )
}

export default Home

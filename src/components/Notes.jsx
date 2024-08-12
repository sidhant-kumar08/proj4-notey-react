import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Notes({title, desc}) {
    return (
        <>
            <div className="notes-container">
                <div className="notes-icons">
                    <FaEdit onClick={()=>{
                        console.log('clicked')
                    }} />
                    <MdDelete />

                </div>
                <h1 className='notes-title'>{title}</h1>
                <p className='notes-desc'>{desc}</p>
            </div>
        </>
    )
}

export default Notes

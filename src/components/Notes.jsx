import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Notes() {
    return (
        <>
            <div className="notes-container">
                <div className="notes-icons">
                    <FaEdit />
                    <MdDelete />

                </div>
                <h1 className='notes-title'>Title</h1>
                <p className='notes-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus non voluptatibus deserunt dolorum doloribus facere? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, perspiciatis culpa iste molestias perferendis minima? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus non voluptatibus deserunt dolorum doloribus facere? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, perspiciatis culpa iste molestias perferendis minima?</p>
            </div>
        </>
    )
}

export default Notes

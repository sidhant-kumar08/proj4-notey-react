import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



function Create() {

 const [title, setTitle] = useState('')
 const [desc, setDesc] = useState('')

    const handlechange = (e)=>{
        setTitle(e.target.value)
    }
    const handlechange2 = (e)=>{
        setDesc(e.target.value)
    }


    const hadleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/', {formTitle: title, formDesc: desc});
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
        setDesc('')
        setTitle('')

    }

    return (
        <>
            
            <Link to='/' className='back-btn-add'>{'< Back to home'}</Link>

            <div className='form-container'>

            

                <form onSubmit={hadleSubmit} >
                    <h1 className='main-title'>ADD YOUR NOTES INFO</h1>
                    <input type="text" placeholder='Add title' onChange={handlechange} value={title} name='title' />
                    <input type="text" placeholder='Add Your note here!' onChange={handlechange2} value={desc} name='description' />
                    
                    <button type="submit" className='submit-btn'>ADD NOTES</button>
                    
                </form>
            </div>

            

        </>
    )
}

export default Create

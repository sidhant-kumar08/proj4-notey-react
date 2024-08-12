import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Notes from './Notes';

function Create() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [notes, setNotes] = useState([]);

  

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title && desc) {
      setNotes([...notes, { title, desc }]);
      setTitle('');  // Clear the title input
      setDesc('');   // Clear the description input
    } else {
      console.warn("Title and description cannot be empty.");
    }
  };

  return (
    <>
      <Link to='/' className='back-btn-add'>{'< Back to home'}</Link>

      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h1 className='main-title'>ADD YOUR NOTES INFO</h1>
          <input 
            type="text" 
            placeholder='Add title' 
            onChange={handleTitleChange} 
            value={title} 
            name='title' 
            required
          />
          <textarea 
            type="text" 
            placeholder='Add Your note here!' 
            onChange={handleDescChange} 
            value={desc} 
            name='description' 
            required
          />
          <button type="submit" className='submit-btn'>ADD NOTES</button>
        </form>
      </div>

      <div className="notes-box">
        {notes.map((note, index) => (
          <Notes key={index} title={note.title} desc={note.desc} />
        ))}
      </div>
    </>
  );
}

export default Create;

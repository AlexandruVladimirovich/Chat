import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Join.css';

export default function SignIn({socket}) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const navigate = useNavigate()

  const data = {
    name: name,
    room: room
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const jsonString = JSON.stringify(data);
    localStorage.setItem('data', jsonString)
    navigate('/ChatPage')
  }

  return (
    <div className="join-container">
      <div className="join">
          <form onSubmit={handleSubmit} className='join-inputs'>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
            <button to={'/Chat'}  className='join-signIn-btn'> Sign In </button>
          </form>
      </div>
    </div>
  );
}

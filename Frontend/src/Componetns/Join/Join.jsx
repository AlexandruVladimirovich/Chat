import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn({socket}) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="join-container">
      <div className="join">
        <div className="join-inputs">
          <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
          <Link to={'/Chat'}  className='join-signIn-btn'> Sign In </Link>
        </div>
      </div>
    </div>
  );
}

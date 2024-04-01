import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import '../Chat/chat.css';

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    setRoom(room);
    setName(name);
    
    console.log(name);
   
  }, [location]);

  return (
    <div className="outerContainer">
      <div className="container">
        <h2>Hello</h2>
      </div>
    </div>
  );
}

export default Chat;

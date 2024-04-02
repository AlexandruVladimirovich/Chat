import React, { useState, useEffect } from "react";
import '../Chat/chat.css';

const Chat = ({socket}) => {
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');


  return (
    <div className="chat-container">
      <div className="chat-dialogs"></div>
      <div className="chat"></div>
    </div>
  );
}

export default Chat;

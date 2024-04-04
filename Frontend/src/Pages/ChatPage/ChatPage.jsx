import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './ChatPage.css';
import MessageInputs from "../../Componetns/MessageInputs/MessageInputs";
import SideBar from "../../Componetns/SideBar/SideBar"
import Chat from "../../Componetns/Chat/Chat"

const ChatPage = ({socket}) => {

  const navigate = useNavigate()

  const handleLeave = ()=>{
    localStorage.clear()
    navigate('/')
  }
  
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('response', (data) => {
      setMessages(prevMessages => [...prevMessages, data]);
    });
  }, [socket]);

  return (
    <div className="chatPage-container">
      <SideBar className='sideBar'/>
      <div className="chatPageMain">
        <header className="chatPageHeader">
          <div></div>
          <button onClick={handleLeave}>Leave</button>
        </header>
        <Chat messages={messages}/>
        <MessageInputs socket = {socket}/>
      </div>
    </div>
  );
}

export default ChatPage;


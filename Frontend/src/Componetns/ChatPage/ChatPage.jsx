import React, { useState, useEffect } from "react";
import './ChatPage.css';
import MessageInputs from "../MessageInputs/MessageInputs";
import SideBar from "../SideBar/SideBar"
import Chat from "../Chat/Chat"

const ChatPage = ({socket}) => {

  return (
    <div className="chatPage-container">
      <SideBar className='sideBar'/>
      <div className="messageBlock">
        <Chat className='chat' />
        <MessageInputs className='chat'/>
      </div>
    </div>
  );
}

export default ChatPage;

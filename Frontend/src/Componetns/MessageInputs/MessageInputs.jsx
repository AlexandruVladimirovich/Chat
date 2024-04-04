import React, { useState } from 'react'
import './messageInput.css'

export default function MessageInputs({socket}) {

  const [message, setMessage] =  useState('')

  const handleSend = (e)=>{
    e.preventDefault()
    if(message.trim() && localStorage.getItem('userName')){
      socket.emit('message',{
        text:message, 
        userName: localStorage.getItem('userName'),
        id: `${socket.id}`,
        socketId: socket.id,
      })
    }
    setMessage('')
  }

  return (
   
      <form onSubmit={handleSend} className="messageInputs">
        <input type="text" placeholder='some text' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button>Send</button>
      </form>

  )
}

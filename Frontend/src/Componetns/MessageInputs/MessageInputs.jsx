import React from 'react'
import './messageInput.css'

export default function MessageInputs() {
  return (
    <div className="messageInputs">
      <input type="text" placeholder='some text'/>
      <button>Send</button>
    </div>
  )
}

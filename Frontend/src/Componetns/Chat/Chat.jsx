import React from 'react';
import './Chat.css'

export default function Chat({ messages }) {
  return (
    <div className="chat">
      {messages.map(element => (
        <div key={element.id}>
          {element.userName === localStorage.getItem('userName') ? (
            <div className="chat-right">
            <span className='right'>{element.text}</span>
          </div>
          ) : (
            <div className="chat-left">
              <span className='left'>{element.text}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
 
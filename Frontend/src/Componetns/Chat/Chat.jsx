import React from 'react';
import './Chat.css'

export default function Chat({ messages }) {
  return (
    <div className="chat">
      {messages.map(element => (
        <div key={element.id}>
          {element.userName === localStorage.getItem('userName') ? (
            <div className="yourMessages">
            <span className='yourMessage userName'>{element.userName}</span>
            <span className='yourMessage'>{element.text}</span>
          </div>
          ) : (
            <div className="otherMessages">
              <span className='otherMessage userName'>{element.userName}</span>
              <span className='otherMessage'>{element.text}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
 
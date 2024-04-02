import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "../src/Componetns/Chat/Chat";
import Join from '../src/Componetns/Join/Join';

import socketIO from 'socket.io-client'
const socket = socketIO.connect('http://localhost:5000')

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} socket = {socket}/>
        <Route path="/Chat" element={<Chat socket = {socket}/>} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "../src/Componetns/Chat/Chat";
import Join from '../src/Componetns/Join/Join';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;

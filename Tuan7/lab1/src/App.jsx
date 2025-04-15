import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Main } from './Pages/Main.js';

function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;

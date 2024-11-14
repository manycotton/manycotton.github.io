import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Main } from './Pages/Main.js';

function App() {
  useEffect(() => {
    // Google Analytics script
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-F1LWJKBGJL";
    script.async = true;
    document.head.appendChild(script);

    // Google Analytics configuration
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-F1LWJKBGJL');
    `;
    document.head.appendChild(inlineScript);
  }, []);

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

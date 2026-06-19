import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './Pages/MainPage';
import WorkWithMePage from './Pages/WorkWithMePage';
import FullPublicationsPage from './Pages/FullPublicationsPage';

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
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/work-with-me" element={<WorkWithMePage />} />
          <Route path="/publications" element={<FullPublicationsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import InputProvider from './context/InputContext';
import ResultProvider from './context/ResultContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InputProvider>
      <ResultProvider>
        <App />
      </ResultProvider>
    </InputProvider>
  </React.StrictMode>
);
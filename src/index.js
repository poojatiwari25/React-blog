import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';

// Use ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

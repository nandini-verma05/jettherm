import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css'; 



// Create a root element and render the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
<React.StrictMode>
    
      <App />

  </React.StrictMode>
);

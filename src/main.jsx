import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Fix for ReactDom
import App from './App.jsx';
import './index.css';
import { store } from './redux/store.js';
import { Provider } from 'react-redux'; // Correct case for react-redux

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

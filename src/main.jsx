import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './pages/Router.jsx'
import { RouterProvider } from "react-router-dom";
import App from './App';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)

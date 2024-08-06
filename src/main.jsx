import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import app from './firebase.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Navigation />
    </Router>
  </React.StrictMode>,
);
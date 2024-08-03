import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import VideoProvider from './contexts/VideoProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <VideoProvider>
        <App />
    </VideoProvider>
)

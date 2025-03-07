import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
// browser router se app component ko wrap kiya 
// isse app par aane wale sabhi components ko routing ke liye enable karta hai
//import components with the url 
//for making url we use routes and route
//isse pura page relode nahi hota or user ko accha anubhav milta hai
//yah react app mai navigation or routing ko enable karta hai
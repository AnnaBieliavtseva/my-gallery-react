import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'modern-normalize';
import './components/index.css'
import App from './components/App.jsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster/>
  </StrictMode>,
)

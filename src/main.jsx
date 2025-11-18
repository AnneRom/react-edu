import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { AppProvider } from './contexts/AppProviders.jsx'
import { BrowserRouter } from "react-router-dom";

// const initialUserValue = {
//   username: 'Hanna',
//   isLoggedIn: true,
// };

createRoot(document.getElementById('root')).render(

   <BrowserRouter>
   <AppProvider>
      <App />
   </AppProvider>
   </BrowserRouter>

)

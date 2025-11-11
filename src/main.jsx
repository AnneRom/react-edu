import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { AppProvider } from './contexts/AppProviders.jsx'

// const initialUserValue = {
//   username: 'Hanna',
//   isLoggedIn: true,
// };

createRoot(document.getElementById('root')).render(
//  <StrictMode
   <AppProvider>
      <App />
   </AppProvider>
//  </StrictMode>,
)

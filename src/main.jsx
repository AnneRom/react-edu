import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { UserContext, UserProvider } from './contexts/userContext.jsx';

// const initialUserValue = {
//   username: 'Hanna',
//   isLoggedIn: true,
// };

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
 </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import CreateAccount from './components/createAcc.jsx'
import SetingsPage from './components/setingsPage.jsx'
import Login from './components/logIn.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />,
  },
  {
    path: '/sign-in',
    element: <Login />,
  },
  {
    path: '/account-settings',
    element: <SetingsPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

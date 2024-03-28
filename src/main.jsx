import React from 'react'
import ReactDOM from 'react-dom/client'
//import { UsersApp } from './UsersApp'
//import { LoginPage } from './components/auth/pages/LoginPage'

//import { LoginPage } from './auth/pages/LoginPage'
import './styles.css'
import { UsersApp } from './UsersApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp />
  </React.StrictMode>
)

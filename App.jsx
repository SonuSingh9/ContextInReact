import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/setContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
     <h1>React is here and share is important </h1>
     <Login/>
     <Profile/>
    </ UserContextProvider>
  )
}

export default App

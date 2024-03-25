import {} from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>ALLAH hu akbar</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

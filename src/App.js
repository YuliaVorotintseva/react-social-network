import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/navbar/profile/Profile'
import Dialogs from './components/navbar/dialogs/Dialogs'
import { Route } from 'react-router'
import UsersContainer from './components/navbar/users/UsersContainer'
import AuthContainer from './components/navbar/auth/AuthContainer'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <Route path='/profile' render={() => <Profile/>} />
      <Route path='/dialogs' render={() => <Dialogs />} />
      <Route path='/users' render={() => <UsersContainer />} />
      <Route path='/auth' render={() => <AuthContainer />} />
    </div>
  )
}

export default App

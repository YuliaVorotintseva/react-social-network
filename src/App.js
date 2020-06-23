import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/navbar/profile/Profile'
import Dialogs from './components/navbar/dialogs/Dialogs'
import { Route } from 'react-router'
import UsersContainer from './components/navbar/users/UsersContainer'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />

      <Route path='/profile' render={() => <Profile/>} />
      <Route path='/dialogs' render={() => <Dialogs />} />
      <Route path='/users' render={() => <UsersContainer />} />
    </div>
  )
}

export default App

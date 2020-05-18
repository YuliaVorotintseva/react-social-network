import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/navbar/profile/Profile'
import Dialogs from './components/navbar/dialogs/Dialogs'
import { Route } from 'react-router'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Route path='/profile' component={Profile} />
      <Route path='/dialogs' component={Dialogs} />
    </div>
  )
}

export default App

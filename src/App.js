import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/navbar/profile/Profile'
import Dialogs from './components/navbar/dialogs/Dialogs'
import { Route } from 'react-router'

const App = ({state}) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar items={state.dialogs.items} />
      <Route path='/profile' render={() => <Profile posts={state.profile.posts} />} />
      <Route path='/dialogs' render={() => <Dialogs items={state.dialogs.items} messages={state.dialogs.messages} />} />
    </div>
  )
}

export default App

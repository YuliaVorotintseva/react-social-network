import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/navbar/profile/Profile'
import Dialogs from './components/navbar/dialogs/Dialogs'
import { Route } from 'react-router'

const App = ({items, messages, posts}) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Route path='/profile' render={() => <Profile posts={posts} />} />
      <Route path='/dialogs' render={() => <Dialogs items={items} messages={messages} />} />
    </div>
  )
}

export default App

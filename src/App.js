import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Profile from './components/navbar/profile/Profile'
import Dialogs from './components/navbar/dialogs/Dialogs'
import { Route } from 'react-router'

const App = ({state, dispatch}) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar items={state.dialogs.items} />

      <Route path='/profile' render={() => <Profile
          posts={state.profile.posts}
          profileText={state.profile.profileText}
          dispatch={dispatch}
        />}
      />

      <Route path='/dialogs' render={() => <Dialogs
          items={state.dialogs.items}
          messages={state.dialogs.messages}
          messageText={state.dialogs.messageText}
          dispatch={dispatch}
        />}
      />
    </div>
  )
}

export default App

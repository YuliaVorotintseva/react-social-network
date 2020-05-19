import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { state } from './redux/State'

ReactDOM.render(
  <BrowserRouter>
    <App
      items={state.dialogs.items}
      messages={state.dialogs.messages}
      posts={state.profile.posts}
    />
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister();

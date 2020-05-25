import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/ReduxStore'

const renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

renderTree(store.getState())
store.subscribe(() => {
    const state = store.getState()
    renderTree(state)
})

serviceWorker.unregister();

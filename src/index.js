import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { store, subscribe } from './redux/Store'


const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

renderTree()
subscribe(renderTree)

serviceWorker.unregister();

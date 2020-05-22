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
                addPost={store.addPost.bind(store)}
                updateText={store.updateText.bind(store)}
                updateLikes={store.updateLikes.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

renderTree()
subscribe(renderTree)

serviceWorker.unregister();

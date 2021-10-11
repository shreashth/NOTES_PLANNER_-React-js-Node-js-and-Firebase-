import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rootReducer} from './components/reducers/rootReducer'
import { applyMiddleware, createStore , compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'




const store = createStore(rootReducer, compose(applyMiddleware(thunk)))








ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>,

document.getElementById('root'));


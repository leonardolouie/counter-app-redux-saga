import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './store/reducer';
import './index.css'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import createSagaMiddlware from 'redux-saga'
import { watchAge } from './sagas'

const sagaMiddleWare = createSagaMiddlware()

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(watchAge)




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


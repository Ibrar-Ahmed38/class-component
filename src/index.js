import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {combineReducers, createStore , applyMiddleware} from 'redux'
import myfirstreducer from './Components/reducer';
import createSagaMiddleware from '@redux-saga/core';
import mySaga from './Components/Saga'

const sagaMiddleware= createSagaMiddleware()
const rootReducer = combineReducers({myfirstreducer})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReduser from './redux/rootReducer/rootReducer'
import App from './App';

const store = createStore(rootReduser, compose(applyMiddleware(thunk)))
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App/>  
  </Provider>, 
  rootElement
);

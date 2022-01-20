import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReduser from './redux/rootReducer/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';




const store = createStore(rootReduser, compose(applyMiddleware(thunk)))
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App/>  
  </Provider>, 
  rootElement
);

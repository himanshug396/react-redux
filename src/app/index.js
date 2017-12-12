import React from 'react';
import {render} from "react-dom";
import { createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {App} from './components/App';
import { Provider} from 'react-redux';

const initialState = {
  result : 1,
  last : []
}

const reducer = (state = initialState, action) => {     //state and action are passed automatically from the redux
    switch (action.type) {
      case "ADD":
        state = {
          ...state,
          result: state.result  + action.payload,
          last : [...state.last, action.payload]
        }
        break;
      case "SUB":
        break;
    }
    return state;
};

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));

store.subscribe(()=> {
    // console.log('Store updated', store.getState());
});

store.dispatch({
  type:'ADD',
  payload: 10
});
render(
  <Provider store={store}>
    <App />
  </Provider>
  , window.document.getElementById('app'));

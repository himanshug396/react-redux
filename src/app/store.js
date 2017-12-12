import { createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import reducer from "./reducers/oneReducer";
import thunk from "redux-thunk"

import promise from "redux-promise-middleware"

const logger = createLogger();
export default createStore(combineReducers({
  reducer
}),{}, applyMiddleware(logger,thunk,promise)
);

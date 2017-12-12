import { createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import reducer from "./reducers/oneReducer";


const logger = createLogger();
export default createStore(combineReducers({
  reducer
}),{}, applyMiddleware(logger)
);

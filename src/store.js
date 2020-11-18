import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "./redux/reducer/authReducer";
import {main,searchTime,toastReducer} from "./redux/reducer/mainReduer";

const rootReducer = combineReducers({
  authReducer,
  main,
  searchTime,
  toastReducer
});

const middleware = applyMiddleware(thunk);

const initialState = {};
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;


const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(middleware)
);

export default store;

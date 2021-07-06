import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    userSignUpReducer,
    userLoginReducer,
} from './reducers/userReducers.js';

const reducer = combineReducers({
    userSignup: userSignUpReducer,
    userLogin: userLoginReducer,
});

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;

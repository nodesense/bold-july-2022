import {createStore, combineReducers, applyMiddleware} from 'redux';
import { cartReducer } from './redux-cart/state/cartReducer';

// combineReducers to merge many reduces togethers 

const rootReducer = combineReducers({
    // stateName: reducerFunc
    cart: cartReducer
})

// this will call reducer to initialize default state
const store = createStore(rootReducer)

export default store;
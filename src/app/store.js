import {createStore, combineReducers, applyMiddleware} from 'redux';
import { loggerMiddleware } from './redux-cart/middlewares/loggerMiddleware';
import { cartReducer } from './redux-cart/state/cartReducer';

import thunk from 'redux-thunk';
import { productReducer } from './redux-cart/state/productReducer';

// combineReducers to merge many reduces togethers 

const rootReducer = combineReducers({
    // stateName: reducerFunc
    cart: cartReducer,
    productState: productReducer
})

// this will call reducer to initialize default state
const store = createStore(rootReducer, 
                          applyMiddleware(loggerMiddleware, thunk))

export default store;
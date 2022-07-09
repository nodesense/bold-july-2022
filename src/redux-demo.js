// redux example, not for project

import store from "./app/store";
import * as actions from './app/redux-cart/state/actions';
import {bindActionCreators} from 'redux';

console.log("redux example")

// get teh state from redux 
// state is an object from combinerReducers where cart is key, 
// value is returned by  reducer

let state = store.getState()
console.log("STATE ", state) // {cart: {items: [], totalItems : 0, amount: 0 } }

let action = actions.addItemToCart(1, "iPhone 10", 45000)

console.log("AddItem action ", action) // {type: ADDITE_CART_CART, payload: {item: {id: 1, price: 45000..}}}


// susbcribe callback
// susbcribe after dispatch called the reducers, and state is updated
// susbcribe called whether data changed or not 
const unsubscribeFunc = store.subscribe( () => {
    console.log("Susbcribe called STATE ", store.getState())
});

// dispatch action, dispatch shall call reducer
// dispatch will pick state from store, pass that state to reducer 
// aciton is passed along with dispatch



console.log("DISPATCHING action ", action)
store.dispatch(action)

console.log("STATE", store.getState())

// update qty of item
action = actions.updateItemInCart(1, 5) // iphone qty to 5
console.log("DISPATCHING action ", action)
store.dispatch(action)

console.log("STATE", store.getState())


const getProductFuncAction = actions.getProducts()
console.log("DISPATCHING get product functions ", getProductFuncAction)

// redux thunk middleware shall stop the function forwarded to reducers
// thunk will call getProduct function
store.dispatch(getProductFuncAction)


// bindActioncreators
// helper function 
//  create a wrapper function around action function + dispatch together
// when we call the wrapper function, it calls action automatically to create action 
// and dispatch the created action

// bindActionCreators return a wrapper function if we pass a/single function
// bindActionCreators returns objet with wrapper functions if pass set of functions

// we are pass action func and dispatch as argument to bind action creator
// returns a wrapper function that can create action and dispatch action
const addItemBindActionFunc = bindActionCreators(actions.addItemToCart,
                                                store.dispatch)

// passed parameters are passed to action function internally
// this dispatch action
// check logger output for Galaxy product                                               
addItemBindActionFunc(2, 'Galaxy', 35000)

//returns object of wrapper functions, all functions in actions.js are wrapped

const bindActions = bindActionCreators(actions, store.dispatch)
// create action and dispatch actions too
bindActions.updateItemInCart(2, 3)
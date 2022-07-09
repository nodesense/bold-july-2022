// redux example, not for project

import store from "./app/store";
import * as actions from './app/redux-cart/state/actions';

console.log("redux example")

// get teh state from redux 
// state is an object from combinerReducers where cart is key, 
// value is returned by  reducer

let state = store.getState()
console.log("STATE ", state) // {cart: {items: [], totalItems : 0, amount: 0 } }

let action = actions.addItemToCart(1, "iPhone 10", 45000)

console.log("AddItem action ", action) // {type: ADDITE_CART_CART, payload: {item: {id: 1, price: 45000..}}}

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


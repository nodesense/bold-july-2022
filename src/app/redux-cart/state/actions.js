// action creators
// create and return action objects
import * as ActionTypes from './action-types';
import { fetchProducts } from './services';
 

// place holder for action creators which are functions 

/*
return action, action creator function
function increment(value) {
    return {type: 'INCREMENT', payload: {value}}
}
*/


// es5
export function removeItemFromCart(id) {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {id}
    }
}

//es6 style with return keyword
export const updateItemInCart = (id, qty) => {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {id, qty}
    }
}

//es6 with single line, recommended, simple, single line function, doesn't need return
export const addItemToCart = (id, name, price) => ({
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: { item: {id, name, price, qty: 1} }
}) 

//es6 with single line, recommended, simple, single line function, doesn't need return
export const emptyCart = () => ({type: ActionTypes.EMPTY_CART})

//product/state/actions/product.actions.js
export const initLoading = (state) => ({
    type: ActionTypes.INIT_LOADING, 
    payload: {loading: state}}) 

export const initProducts = (products) => ({
    type: ActionTypes.INIT_PRODUCTS, 
    payload: {products}
})                                       
// redux-thunk is a library, a pattern, that makes 
// action functions to call api, 
// in all the action creators, we return object
// in thunk, we return action function instead of action object
// redux thunk/async functions
// get data from backend
// redux-thunk, we return a function instaed of object from action creator
//getProducts is action function, that returns action function instead of action object
export function getProducts() {
    // return action  function instead of object
    // this function we return here shall be dispatched by container
    // redux-middleware middle, will check if dispatch data is object or function
    // if action dispatched is function, ie current scenario
    // the function is called by redux-middleware
    // the function is not forwarded further
    return async function (dispatch, getState) {
        console.log("action function called by thunk")
        // we write async code like API call
        // use service api (optional) or axios directly here to get data from backend
        // dispatch the data to reducer/store as action object

        dispatch(initLoading(true)) // set the loading icon     
        const products = await fetchProducts()
        // we have to initialize products to store/reducer
        console.log("Products fetched via thunk  ", products)
        dispatch(initLoading(false)) // set the loading icon off
        dispatch(initProducts(products)) // dispatch products to reducer
}
}
// action creators
// create and return action objects
import * as ActionTypes from './action-types';

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

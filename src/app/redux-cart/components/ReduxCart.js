//redux-cart/components/ReduxCart.js
import React from 'react';
// import ReduxCartList from '../containers/ReduxCartList'
// react code, no redux hardcoded here
// container component shall pass amount, addItem, emptyCart
// as props, which can work with store
// dumb/view/presentation component
const ReduxCart = (props) => {
    console.log("ReduxCart Render", props)
    // emptyCart is bindActionCreator
    // actions is object of bindActionCreators
    // addItem is function from container
    // amount is data from store state cart.amount
    const {amount, addItem, emptyCart, actions} = props;
    return (
        <div>
            <h2> Redux Cart </h2>
            <p>Amount {amount}</p>
            <button onClick={addItem}>
                Add Item
            </button>
            <button onClick={emptyCart}>
                Empty Cart
            </button>
            <button onClick={actions.emptyCart}>
                Empty Cart
            </button>
            
            {/* <ReduxCartList /> */}
        </div>
    )
}

export default ReduxCart;
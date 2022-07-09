import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReduxCart from '../components/ReduxCart';
import * as actions from '../state/actions';

// now we need data from store/state
// mapStateToProps
// state = store.getState()
// is called by container after every dispatch 
// useful to send props needed for react component from redux state
export const mapStateToProps = (state) => {
    console.log("ReduxCart mapStateToProps")
    // cart is mentioned in combineReducer, is a state
    // amount is reducer value
    return {
        //propName: data from state
        amount: state.cart.amount,
        totalItems: state.cart.totalItems
    }
}

// we need to dispatch actions to store
// mapDispatchToProps
// called by container component only once, 
// returned props are passed to react component
export const mapDispatchToProps = (dispatch, getState) => {
    console.log("ReduxCart mapStateToProps")
    // return set of props to react component which are functions for  event
    return {
        //callbackFunctionName: callbackFunction
        addItem: () => {
            const id = Math.ceil (Math.random() * 1000000)
            const item = {
                id, // id: id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: Math.ceil(Math.random() * 10),
            }
            console.log("Dispatching addItem")

            const action = actions.addItemToCart(item.id, item.name, item.price)
            dispatch(action)
        },
        // pass wrapper function that can call and dispatch action
        emptyCart: bindActionCreators(actions.emptyCart, dispatch),
        // pass wrapper function2 those can call and dispatch action
        actions: bindActionCreators(actions, dispatch)
    }
}

// container component by connection all together
// container susbcribe data from store
// container takes store from Provider (index.js) via react context
// container is a pure component, it won't render either functional /class component
//  without props change
// if you don't want container to be pure, check document, we have options
const ReduxCartContainer = connect(mapStateToProps, 
                                   mapDispatchToProps) (ReduxCart);

// we are using default export, while importing, we can use any name to import alias name
// import default is alias name
// import ReduxCart from ../containers/ReduxCart
// import X from ../containers/ReduxCart

export default ReduxCartContainer;
// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

function  recalculate(props, state) {
    let discount = 0;

    if (props.count >= 10) {
        discount = 20;
    } else if (props.count >= 5) {
        discount = 10;
    }

    let grandTotal = props.amount - (props.amount * discount / 100);

    return  {
        discount, 
        grandTotal
    }
}

// TODO: PureComponent
 class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    //TODO: componentWillMount
    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate

     
    // how to compute derived state based parent component props change
    // we calculate grandTotal, discount based on amount and count
    // business logic if count > 5, 10%, count > 10 => 20% discount
    static getDerivedStateFromProps(props, state) {
        console.log("CartSummary getDerivedStateFromProps")
        return recalculate(props, state)
    }

    // called only update cycle, 2nd time render onware
    // not called on creation cycle, not called on 1st render
    // returns either true or false
    // if return true, then render will be called
    // if return false, render shall not be called
    // developers to compare current state with next state attributes
    // and compare current props with next props attributes
    // this method can prevent render being called during update cycle [not in create cycle]
    shouldComponentUpdate(nextProps, nextState) {
        console.log("CArtSummary shouldComponentUpdate")
        console.log("props ", this.props, nextProps)
        console.log("state", this.state, nextState)
        // logic should compare props with next props, state with next state
        // only render if any diff in props or any diff in state

        return nextProps.amount != this.props.amount ||
               nextProps.count != this.props.count ||
               nextState.discount != this.state.discount ||
               nextState.grandTotal != this.state.grandTotal
    }
 
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}

export default CartSummary;
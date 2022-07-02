// components/Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

// derived data from state 
function  recalculate(props, state) {
    let count = 0, 
        amount = 0;

    for (let item of state.items) {
        amount += item.price * item.qty;
        count += item.qty;
    }

    return  {
        amount,
        count
    }
}

class Cart extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 1}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO:
 
    }
    
    removeItem = (id) => {
        //TODO
    }

    updateItem = (id, qty) => {
        //TODO
    }

    empty = () => {
        //TODO
         
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

   

    //TODO:
    //componentWillMount
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 




export default Cart;
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

     // class instance variable, not state 
    nextId = 2
     
    getNextId() {
        return this.nextId++
    }

    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    constructor(props) {
        super(props);

        const items = []
        for (let i = 0; i < 10000; i++){
            let id =  this.getNextId()
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            } 
            items.push(item)
        }

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 1},
                        ...items,
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }

    // compute derived state either from props or state of the component
    // reactive to the changes, any changes in the state must ensure to calculate new derived state
    // It must work on component mounting/creation state, or component update lifecyle
    // getDerivedStateFromProps function called before render function during creation cycle
    // getDerivedStateFromProps function called before render  function during update cycle
    static getDerivedStateFromProps(props, state) {
        console.log("CART getDerivedStateFromProps")
        const {amount, count} = recalculate(props, state)
        // return a new state object with amount and count properties
        //returned state shall be merged with this.state before calling render
        return {amount, count};

        // return recalculate(props,state)

    }
    
    addItem = () => {
        let id = this.getNextId();
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        } 

        // immutablity
        this.setState({
            items: [...this.state.items, item]
        })
    }
    
    // Child to parent communication happens via callback
    // parent component shall pass its function to child component as props
    // child component shall call the parent component function
    // we will update pass removeItem, updateItem functiosn to CartList component as props
    // CartList shall passs removeItem, updateItem functions to each CartItem component as props
    // CartItem component shall call updateItem, removeItem on button clicks
    removeItem = (id) => {
        //TODO
        console.log("removeItem called", id)

        // immutable way of removing items in array using filter method, 
        // this create a new array from filter, including all items except the one we remove
        this.setState({
            items: this.state.items.filter (item => item.id !== id) 
        })
    }

    updateItem = (id, qty) => {
        //TODO
        console.log("updateItem called", id, qty)
        // TWO parts immutablility to be taken care, since we modify an OBJECT located inside an  ARRAY
        // 1. Array must be immutable
        // 2. Object in the array must be immutable
        // map returns new array, {...item} returns new object
        const items = this.state.items.map (item => item.id === id? {...item, qty}: item)
        this.setState({
            items // ES6, items: items
        })
    }

    empty = () => {
        this.setState({
            items: [] 
        }) 
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
                       updateItem = {this.updateItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 




export default Cart;
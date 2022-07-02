// CartList.js

import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //PureComponent: Purecomponet is derived from Component class
 // PureComponent by default implements shouldComponentUpdate function
 // Purecomponent' shouldComponentUpdate compare current props with next props and curent state with next state
 //   and return true or false based on compare result
 // purecomponent render only if any diff in props or state found
// pure compare both funcs and values or object passed to props
// pure component does shallow comparation ~ Big O(1), check two references 
 class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items, removeItem, updateItem} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {/* in jsx, we cannot write statement like for, if etc */}
                    {/* but use expression */}
                    {/* key is react keyword, useful to check whether it compare same object before get itno deep compare 
                        used for performance improvement. key must be unique with in parent tag tbody
                    */}
                    {
                        items.map (item => <CartItem key={item.id} item={item}
                                                     removeItem={removeItem}
                                                     updateItem={updateItem}   
                             />)
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;
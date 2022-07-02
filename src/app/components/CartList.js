// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

 class CartList extends Component {
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
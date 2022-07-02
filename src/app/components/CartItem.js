// CartItem.js
import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }


    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    // Life Cycle: Creation Cycle/Mounting stage
    // Class component, constructor of the component is called first
    // it calls getDerivedStateFromProps if exist
    // then calls render function [Creation cycle]
    // componentDidMount - here the virtual is mounted into REAL DOM

    // Life Cycle: Update Cycle , when parent render called on update cycle, or this.setState called after mount
    //  it calls getDerivedStateFromProps if exist
    //  it calls shouldComponentUpdate  - return true or false
    // if shouldComponetUpdate return True
            //  then calls render function
            //  calls componentDidUpdate [the virtual dom changes are applied into REAL DOM]


    // Life Cycle: component destrution
        // componentWillUnmount

    // called during creation cycle, after render function, called only once
    // make api call, start timer, start subscription etc
    componentDidMount() {
        console.log("CartItem componentDidMount", this.props.item.id)
    }
   
    // called only on update cycle, after calling render function
    // access REAL DOM while working with canvas, charts, svg etc 
    componentDidUpdate() {
        console.log("CartItem componentDidUpdate", this.props.item.id)
    }

    // called only on destruction cycle
    // stop api calls, stop timer, unsusbcribe, resource cleanup
    componentWillUnmount() {
        console.log("CartItem componentWillUnmount", this.props.item.id)
    }


    render() {
        let {item, removeItem, updateItem} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => updateItem(item.id, item.qty + 1) }>
                        +1
                </button>    

                <button onClick={ () => updateItem(item.id, item.qty - 1) }>
                        -1
                </button>    
                <button onClick={ () => removeItem(item.id) }>
                        X
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

export default CartItem;
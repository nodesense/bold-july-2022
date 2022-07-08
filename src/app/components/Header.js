// Header.js
import React from 'react';

import {NavLink, Link} from 'react-router-dom';


// Functional component
// props - properties
// passed from parent to child
// props are read only
// ES5 style
function Header(props) {
    console.log("Header render", props);
    const {title} = props; // title = props.title
    return (
        <div>
            <h2>{title}</h2>

            <NavLink className="button" to="/" exact activeClassName='success' > Home </NavLink>   
            <NavLink  className="button" to="/products" activeClassName='success' >Products</NavLink>  
            <NavLink  className="button" to="/cart" activeClassName='success' >Cart</NavLink>  
            <NavLink  className="button" to="/brands" activeClassName='success'  >  Brands </NavLink>  
            <NavLink  className="button" to="/redux-products" activeClassName='success' >  Redux Products </NavLink>  
            
            <NavLink  className="button" to="/redux-cart" activeClassName='success' >  Redux Cart </NavLink>  
            <NavLink  className="button" to="/checkout" activeClassName='success' > Checkout </NavLink>  
            <NavLink  className="button" to="/counter" activeClassName='success' >  Counter </NavLink>  
            <NavLink  className="button" to="/func-counter" activeClassName='success'  > FuncCounter </NavLink>  
            
            <Link  className="button" to="/login"  > Login </Link>  
        </div>
    )
}

export default Header;
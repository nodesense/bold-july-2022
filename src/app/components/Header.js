// Header.js
import React from 'react';

import {NavLink, Link} from 'react-router-dom';
import LangContext from '../contexts/LangContext';


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

            <LangContext.Consumer>

             { (lang) => (
                <>
                    <NavLink className="button" to="/" exact activeClassName='success' > {lang.home} </NavLink>   
                    <NavLink  className="button" to="/products" activeClassName='success' > {lang.products} </NavLink>  
                    <NavLink  className="button" to="/cart" activeClassName='success' > {lang.cart} </NavLink>  
                    <NavLink  className="button" to="/brands" activeClassName='success'  >  Brands </NavLink>  
                    <NavLink  className="button" to="/redux-products" activeClassName='success' >  Redux Products </NavLink>  
                    
                    <NavLink  className="button" to="/redux-cart" activeClassName='success' >  Redux Cart </NavLink>  
                    <NavLink  className="button" to="/checkout" activeClassName='success' > Checkout </NavLink>  
                    <NavLink  className="button" to="/counter" activeClassName='success' >  Counter </NavLink>  
                    <NavLink  className="button" to="/func-counter" activeClassName='success'  > FuncCounter </NavLink>  
                    
                    <Link  className="button" to="/login"  > Login </Link> 
                </>
             )}
           
            </LangContext.Consumer>
        </div>
    )
}

export default Header;
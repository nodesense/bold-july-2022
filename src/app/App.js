// app/App.js
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Counter from './components/Counter';
import Cart from './components/Cart';
import FuncCounter from './components/FuncCounter';

import {Route, Switch, Redirect} from 'react-router-dom';
import ProductList from './components/ProductList';
import ThemeContext from './contexts/ThemeContext';
 

// class component
class App extends React.Component {
    constructor(props) {
        super(props) // super refer base class cons
        console.log("App comp created")
    }

    // class property, App.defaultProps
    static defaultProps = {title : 'Shopping Cart'}

    // keyword, create and returns v.dom, called by react
    render() {
        console.log("App render", this.props)

        //ERROR, props are read only
        //this.props.title = 'soemthng'

        const {title} = this.props;

        return (
            <div>
                <ThemeContext.Provider value="lightgreen">
                <h2>Product App</h2>
                {/* component composition , App is parent component, Header,
                    Footer are children components */}

                    {/* title is an attribute for object props */}
                <Header title="Shopping Cart" />

                {/* switch pick first match */}
                <Switch>

                    <Route path="/" exact>
                        <h2>Home page</h2>    
                    </Route>        

                    <Route path="/cart">
                        <Cart />
                    </Route>
                    
                    <Route path="/products">
                         <ProductList />
                    </Route>
                    
                    <Route path="/brands">
                        <h2>Brands</h2>
                    </Route>
                    
                    <Route path="/redux-cart">
                        <h2>Reduxt Cart</h2>
                    </Route>

                    <Route path="/func-counter">
                        <FuncCounter />
                    </Route>

                    <Route path="/counter">
                    <Counter startValue={100} />
                    </Route>

                    <Route path="*">
                        <h2>Page not found</h2>
                    </Route>

                </Switch>
                {/* not footer context consumer will get provider value */}
                <Footer title={title} company="Bold" year={"2020 + 2"}>
                    {/*  {} represent expression, jsx comment */}
                    {/* this area is known as content children 
                        is passed to child component as props.children
                    */}
                    <p>Sat/Sun holiday</p>
                </Footer>
            </ThemeContext.Provider>
            </div>
        )
    }
}
 
export default App; 
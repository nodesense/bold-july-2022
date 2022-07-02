// app/App.js
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Counter from './components/Counter';
import Cart from './components/Cart';
import FuncCounter from './components/FuncCounter';


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
                <h2>Product App</h2>
                {/* component composition , App is parent component, Header,
                    Footer are children components */}

                    {/* title is an attribute for object props */}
                <Header title="Shopping Cart" />

                <FuncCounter />

                <Cart />

                <Counter startValue={100} />

                <Footer title={title} company="Bold" year={"2020 + 2"}>
                    {/*  {} represent expression, jsx comment */}
                    {/* this area is known as content children 
                        is passed to child component as props.children
                    */}
                    <p>Sat/Sun holiday</p>
                </Footer>
            </div>
        )
    }
}
 
export default App; 
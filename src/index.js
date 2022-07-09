// Bootstrap file, load react into browser
import React from 'react'; // useful for development, create virtual dom 
import ReactDOM from 'react-dom'; // real dom, event handling, patch virtual dom to real dom
// . means, current project directory
// no curly brace for default import
// 


import './redux-demo';

import App from './app/App';
import {BrowserRouter as Router}  from 'react-router-dom';
 

import "./index.css"; // using web pack plugin, css is imported and extracted
import store from './app/store';
import {Provider} from 'react-redux';

// index.html <div id="root".... place holder for react app

const root = document.getElementById("root"); // REAL DOM

// create v.dom 
const vdom1 = React.createElement ("h1", 
                                    {id: "myhead", className:'head'},
                                    "Welcome To React"
                                    )

// create v.dom using JSX (JavaScript XML)
// JSX code shall be converted to JavaScript React.createElement by babel
const vdom2 = <h1 id="myhead" className='head'>Welcome to React</h1>

// Provider pass the store through context to any container component
// mount virtual dom into real dom
ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
, root) // 0r use vdom2

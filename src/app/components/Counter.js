// Counter.js
//  React is default import, no curly brace
// Component is named export, so we use {} to import
import React, {Component} from 'react';
// React.Component == Component are same

// Component is base class, Counter is child class
class Counter extends Component {
    
    constructor(props){
        // passing props to super class, initialise props with this.props
        // however whether we call super or not, constructor written or not, 
        // this.props always avaiable in render and life cycle methods
        super(props) // super is Component class constructor
        console.log("Counter component created ", props)
        console.log("Counter cons this.props", this.props) // print only if super(props)

        // props are passed from parent to child, owned by parent component, props are immutable/constant for child
        // state is react class component feature, keyword, 
        // each component has its own state/data which can be manipuated/mutated
        // component state can be read/write other words get/set
        // constructor is good place to initialize state, each component instance shall have its own state
        // state value must be changed only using this.setState
        this.state = {
            counter: this.props.startValue
        }
    }

    static defaultProps = {startValue: 0}

    // es6+ class style event handler
    // by default, react shall pass event object as first parameter
    // arrow func => , this solves this context
    // event are done via callback func, incr is callback method, attached to button click
    incr = (event) => {
        console.log("event is ", event)
        console.log("before ", this.state)
        // how to mutate data in state
        // setState is async function, the values are NOT set  immediately
        // setState goes through batch update, few/many setState are merged with in event and finally 
        // values are merged and set to this.state later
        // after updating this.state, react shall trigger render function to display latest values
        // pattern 1, pass object to setState with any attribute which will be set on next render cycle
        // setState has callback function as second argument
        // setState callback is called after merging the states, after updating this.state and after calling render
        // first arg is new state object, second arg is function callback
        this.setState({ counter: this.state.counter + 1}, () => {
            // good place to implement side effect, after changing a   state, compute or act on changes
            console.log("incr setState callback ", this.state) // updated state
            // again, compute new result based on previous result, setState will call render again
            this.setState({counter: this.state.counter + 1})// trigger another render function
        })

        console.log("after ", this.state)
    }

    //we don't take event param, as we dont use them
    // decr is callback method, attached to button click
    decr = () => {
        console.log("decr before ", this.state)
        // having functional setState in code, we will ensure that render is called once not
        // set state pattern 2, functional setState
        // pass a callback function to setState, which will be called at the time of merge state, not immediately
        // functional setState callback accept 2 parameters, first param is prevState, next param is props
        // first time, prevState would be this.state value, 
        // when we have more callbacks, prevState is merged output from previous callbacks
         // prevState shall be  {counter: 100} [similar to this.state] 
        this.setState( (prevState, props) => {
            console.log("functional setState called first prevState ", prevState, props)
            // return a new state with any attribute that will be merged with this.state finally before render call
            // returned value with state is passed to next setState callback as input
            return {
                counter: prevState.counter - 1 // return 100 - 1 = 99 
            }
        })

        // previously compueted state counter value shall be passed here as prevState
        // render shall be called only once here, not twice
        // prevState shall be  {counter: 99} , from previous setState callback
        this.setState( (prevState, props) => {
            console.log("functional setState called second prevState ", prevState, props)
            // return a new state with any attribute that will be merged with this.state finally before render call
            return {
                counter: prevState.counter - 1
            }
        })

        console.log ("desc after ", this.state)
    }

    // called by react and create and  return v.dom
    render() {
       // console.log("Counter render props", this.props)
        console.log("Counter render state ", this.state)

        return (
            <div>
                <h2>Counter</h2>
                <p>Counter is {this.state.counter}</p>
                {/* we assign func reference to onClick event as callback, the function called by react 
                    when button clicked */}
                <button onClick={this.incr}>+1</button>
                <button onClick={this.decr}>-1</button>
            </div>
        )
    }
}
// only one default per module
// file is called as module  in es6
export default Counter;
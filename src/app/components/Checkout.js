// working with input controls
// formik
// working with ref
import React, {createRef} from 'react';

//Ref - Reference, a reference to Real DOM Object, a wrapper object 
// Ref shall be accessible from componentDidMount onwards
// Ref is useful to work dom, input element, select element text or focus text
// Work with chart control with direct dom/canvas,svg etc

// React has no data binding, 
// react has uni directional data flow
// virtual dom update goes to real dom
// events/ keyboard/mouse etc happens at real dom
class Checkout extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'your name',
            city: ''
        }

        this.nameRef = createRef()
    }

    handleChange = (e) => {
         // take data from real dom changes
         // then update the state
         // from state, virtual dom shall be updated
         // <input name="name" value=../>, target is real dom input/select box
         const {name, value} = e.target;
         console.log('change ', name, value)
         // update state
         this.setState({ [name]: value})
    }

    componentDidMount() {
         this.nameRef.current.focus(); 
         this.nameRef.current.select();
    }

    render() {
        console.log("Checkout render");
        return (
            <div>
                <h2>Checkout</h2>
                <form>
                    Name <input name="name" type="text" value={this.state.name}
                            onChange={this.handleChange}
                            ref = {this.nameRef}
                     />
                    City <select name="city" value={this.state.city}   onChange={this.handleChange}>
                        <option value="CH">Chennai</option>
                        <option value="BLR">Bengaluru</option>
                        <option value="MY">Mysore</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Checkout;
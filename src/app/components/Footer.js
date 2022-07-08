// Footer.js
import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../contexts/ThemeContext';
 
// ES6 style 
// props is object {}
const Footer = (props) => {
    console.log("Footer render", props);
    // destructuring java script object
    const {title, company, year, children} = props

    return (
        <div>
            <hr />
            <p>Copyrights@{year}, {title}, by {company} </p>
            {children} {/* from parent content children */}

            {/* value is either default or provided by provider..
                if no provier, value shall be taken from default
            */}
            <ThemeContext.Consumer>
                { value => (<span >Theme is {value} </span>)}
            </ThemeContext.Consumer>
        </div>
    )
}

// default props if the parent component doesn't pass props, then default used
//keyword
Footer.defaultProps = {
    company: 'ABC'
}

// validate props data types and required or not 
// not for end user, this is for developers
//keyword
Footer.propTypes = {
    year: PropTypes.number.isRequired, // year should number, must required
    title: PropTypes.string // title should be string, is optional
}

export default Footer;
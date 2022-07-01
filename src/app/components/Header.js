// Header.js
import React from 'react';

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
        </div>
    )
}

export default Header;
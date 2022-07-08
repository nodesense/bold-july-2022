import React, {createContext} from 'react'

// lightblue is default value, the default value can be any data type
// boolean, stirng, object, array, number
// Default value is used when we use the context without provider for value
const ThemeContext = createContext(  "lightblue" )

export default ThemeContext